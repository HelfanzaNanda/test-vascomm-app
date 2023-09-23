"use client";
import { LoadingButton } from "@/components/Button/Loading";
import StatusBadge from "@/components/Common/StatusBadge";
import Datatables from "@/components/Datatables";
import DataTableAction from "@/components/Datatables/Action";
import FormInput from "@/components/Form/Input";
import InputFile from "@/components/Form/InputFile";
import Select from "@/components/Form/Select";
import ConfirmationDelete from "@/components/Modal/ConfirmationDelete";
import { useApproveUser } from "@/features/users/useApproveUser";
import { useCreateUser } from "@/features/users/useCreateUser";
import { useDatatableUser } from "@/features/users/useDatatableUsers";
import { useDeleteUser } from "@/features/users/useDeleteUser";
import { useEditUser } from "@/features/users/useEditUser";
import { useFindUser } from "@/features/users/useFindUser";
import { toastSuccess } from "@/lib/my-toast";
import { DatatableColumn } from "@/models/Datatable";
import { UserDatatableResult, UserInput, UserInputSchema, UserResult } from "@/models/User";
import { GlobalResponse } from "@/types/response";
import { Button, Modal } from "flowbite-react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
export default function Product() {



    const [data, setData] = React.useState<UserDatatableResult>({
        data: [],
        recordsTotal: 0,
        recordsFiltered: 0
    });


    const columns: DatatableColumn[] = [
        { id: 'name', selector: (row: any) => row.name, name: "Name", },
        { id: 'email', selector: (row: any) => row.email, name: "email", },
        { id: 'phone', selector: (row: any) => row.phone, name: "phone", },
        // { id : 'image', selector: (row : any) => row.image, name: "Image", },
        { id: 'status', selector: (row: any) => row.status, format: (row: any) => <StatusBadge status={row.status} />, name: "Status", },
        { name: "Action", cell: (row) => 
            <DataTableAction onClickDelete={() => handleConfirmationDelete(row.id)} onClickEdit={() => handleEdit(row.id)} onClickDetail={() => handleDetail(row.id)} >
                 {
                    row.status == "NOT ACTIVE" && (
                        <button onClick={() => handleApprove(row.id)} type="button" className="h-6 w-6 flex justify-center items-center font-medium rounded-full bg-red-400 hover:bg-yellow-600 text-white dark:text-blue-500 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    )
                 }
            </DataTableAction>, 
            ignoreRowClick: true, allowOverflow: true, button: true, 
        },
    ];

    const { mutate: datatableMutate } = useDatatableUser({
        onSuccess: (res: GlobalResponse<UserDatatableResult>) => {
            if (res.code == 200) {
                setData(res.data)
            }
        }
    });

    useEffect(() => {
        datatableMutate({});
    }, [])

    const [openModal, setOpenModal] = React.useState(false);
    const [formType, setFormType] = React.useState("");





    const formik = useFormik<UserInput>({
        initialValues: {
            id: 0,
            status: "",
            name: "",
            email: "",
            phone: ""
        },
        onSubmit: async () => {
            const { status, id, name, email, phone } = formik.values;
            if (id) {
                mutateEdit({
                    status, name, email, phone, id
                });
            } else {
                mutateCreate({
                    status, name, email, phone
                });
            }


        },
        validationSchema: UserInputSchema,
    })

    const handleFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        formik.setFieldValue(event.target.name, event.target.value);
    };


    const { mutate: mutateCreate, isLoading: isLoadingCreate } = useCreateUser({
        onSuccess: (res: GlobalResponse<any>) => {
            console.log('res : ', res);

            if (res.code == 200) {
                resetForm();
                toastSuccess(res.message);
                datatableMutate({});
            }
        }
    });
    const { mutate: mutateEdit, isLoading: isLoadingEdit } = useEditUser({
        onSuccess: (res: GlobalResponse<any>) => {
            console.log('res : ', res);

            if (res.code == 200) {
                resetForm();
                toastSuccess(res.message);
                datatableMutate({});
            }
        }
    });
    const { mutate: mutateFind, isLoading: isLoadingFind } = useFindUser({
        onSuccess: (res: GlobalResponse<UserResult>) => {
            if (res.code == 200) {

                const user = res.data;
                formik.setFieldValue("id", user.id);
                formik.setFieldValue("name", user.name);
                formik.setFieldValue("email", user.email);
                formik.setFieldValue("phone", user.phone);
                formik.setFieldValue("status", user.status);

            }
        }
    });

    const { mutate: mutateDelete, isLoading: isLoadingDelete } = useDeleteUser({
        onSuccess: (res: GlobalResponse<any>) => {
            console.log('res : ', res);

            if (res.code == 200) {
                toastSuccess(res.message);
                datatableMutate({});
            }
        }
    });
    const { mutate: mutateApprove, isLoading: isLoadingApprove } = useApproveUser({
        onSuccess: (res: GlobalResponse<any>) => {
            console.log('res : ', res);

            if (res.code == 200) {
                toastSuccess(res.message);
                datatableMutate({});
            }
        }
    });

    const handleDetail = (id: number) => {
        setFormType("detail");
        mutateFind({ id: id });
        setOpenModal(true);
    }
    const handleCreate = () => {
        setFormType("create");
        setOpenModal(true);
    }

    const handleEdit = (id: number) => {
        setFormType("edit");
        mutateFind({ id: id });
        setOpenModal(true);
    }
    const handleApprove = (id: number) => {
        mutateApprove({ id: id });
    }



    const [id, setId] = React.useState(0);
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const handleConfirmationDelete = (id: number) => {
        setId(id);
        setOpenModalDelete(true);
        // console.log('AJBABAJJ DELETE');
    }

    const handleDelete = (id: number) => {
        setFormType("edit");
        mutateDelete({ id: id });
        setId(0)
        setOpenModalDelete(false);
    }


    const handleCancel = () => {
        resetForm();
    }

    const resetForm = () => {
        formik.resetForm();
        formik.setErrors({})

        setFormType("");
        setOpenModal(false);

    }


    const options = [
        { label: "ACTIVE", value: "ACTIVE" },
        { label: "NOT ACTIVE", value: "NOT ACTIVE" },
    ]


    return (
        <>
            <Datatables
                title="Users"
                data={data.data}
                recordsFiltered={data.recordsFiltered}
                recordsTotal={data.recordsTotal}
                columns={columns}
                mutate={datatableMutate} >
                <button onClick={handleCreate} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
            </Datatables>


            <Modal show={openModal} onClose={handleCancel}>
                <Modal.Header>
                    <div className="capitalize">{formType} product</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form className="space-y-6"
                            onSubmit={formik.handleSubmit}>
                            <FormInput disabled={formType == "detail"} label="Name" name="name" type="text" touched={formik.touched} value={formik.values.name} onChange={handleFormInput} errors={formik.errors} />
                            <FormInput disabled={formType == "detail"} label="Email" name="email" type="email" touched={formik.touched} value={formik.values.email} onChange={handleFormInput} errors={formik.errors} />
                            <FormInput disabled={formType == "detail"} label="Phone" name="phone" type="text" touched={formik.touched} value={formik.values.phone} onChange={handleFormInput} errors={formik.errors} />
                            
                            <Select disabled={formType == "detail"} label="Status" name="status" options={options} touched={formik.touched} value={formik.values.status} onChange={handleFormInput} errors={formik.errors} />
                            <LoadingButton disabled={formType == "detail"} loading={isLoadingCreate || isLoadingEdit} >
                                Submit
                            </LoadingButton>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            <ConfirmationDelete id={id} openModal={openModalDelete} onDelete={(id) => handleDelete(id)} hideModal={(state) => setOpenModalDelete(state)} />
        </>
    )
}