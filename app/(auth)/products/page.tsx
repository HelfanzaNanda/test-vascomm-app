"use client";
import { LoadingButton } from "@/components/Button/Loading";
import StatusBadge from "@/components/Common/StatusBadge";
import Datatables from "@/components/Datatables";
import DataTableAction from "@/components/Datatables/Action";
import FormInput from "@/components/Form/Input";
import InputFile from "@/components/Form/InputFile";
import Select from "@/components/Form/Select";
import ConfirmationDelete from "@/components/Modal/ConfirmationDelete";
import { useCreateProduct } from "@/features/products/useCreateProduct";
import { useDatatableProducts } from "@/features/products/useDatatableProducts";
import { useDeleteProduct } from "@/features/products/useDeleteProduct";
import { useEditProduct } from "@/features/products/useEditProduct";
import { useFindProduct } from "@/features/products/useFindProduct";
import { rupiahFormat } from "@/lib/helpers";
import { toastSuccess } from "@/lib/my-toast";
import { DatatableColumn } from "@/models/Datatable";
import { ProductDatatableResult, ProductInput, ProductInputSchema, ProductResult } from "@/models/Product";
import { GlobalResponse } from "@/types/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal } from "flowbite-react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function Product() {

    

    const [data, setData] = React.useState<ProductDatatableResult>({
        data: [],
        recordsTotal: 0,
        recordsFiltered: 0
    });

    const columns : DatatableColumn[]= [
        { id : 'image', selector: (row : any) => row.file.fileurl, name: "Image", format : (row : any) => <img src={row.file.fileurl} className="w-20 h-20 p-2 rounded-md"/> },
        { id : 'name', selector: (row : any) => row.name, name: "Name", },
        { id : 'price', selector: (row : any) => row.price, format: (row : any) => rupiahFormat(row.price), name: "Price", },
        { id : 'status', selector: (row : any) => row.status, format: (row : any) => <StatusBadge status={row.status} />,  name: "Status", },
        { name: "Action", cell: (row) => <DataTableAction onClickDelete={() => handleConfirmationDelete(row.id)} onClickEdit={() => handleEdit(row.id)} onClickDetail={() => handleDetail(row.id)}/>, ignoreRowClick: true, allowOverflow: true, button: true, },
    ];

    const { mutate : datatableMutate } = useDatatableProducts({
        onSuccess : (res : GlobalResponse<ProductDatatableResult>) => {
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


    
    

    const formik = useFormik<ProductInput>({
        initialValues: {
            status: "",
            id: 0,
            name: "",
            price: "",
            filecode: ""
        },
        onSubmit: async () => {
            const { status, id, name, price, filecode } = formik.values;
            if (id) {
                mutateEdit({
                    status, name, price, filecode, id
                });
            }else{
                mutateCreate({
                    status, name, price, filecode
                });
            }

            
        },
        validationSchema: ProductInputSchema,
    })

    const handleFormInput = (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        formik.setFieldValue(event.target.name, event.target.value);    
    };


    const { mutate : mutateCreate, isLoading : isLoadingCreate } = useCreateProduct({
        onSuccess : (res : GlobalResponse<any>) => {
            console.log('res : ', res);
            
            if (res.code == 200) {
                resetForm();
                toastSuccess(res.message);
                datatableMutate({});
            }   
        }
    });
    const { mutate : mutateEdit, isLoading : isLoadingEdit } = useEditProduct({
        onSuccess : (res : GlobalResponse<any>) => {
            console.log('res : ', res);
            
            if (res.code == 200) {
                resetForm();
                toastSuccess(res.message);
                datatableMutate({});
            }
        }
    });
    const { mutate : mutateFind, isLoading : isLoadingFind } = useFindProduct({
        onSuccess : (res : GlobalResponse<ProductResult>) => {
            if (res.code == 200) {
                
                const product = res.data;
                formik.setFieldValue("id", product.id);
                formik.setFieldValue("name", product.name);
                formik.setFieldValue("filecode", product.file.filecode);
                formik.setFieldValue("price", product.price);
                formik.setFieldValue("status", product.status);

            }
        }
    });

    const { mutate : mutateDelete, isLoading : isLoadingDelete } = useDeleteProduct({
        onSuccess : (res : GlobalResponse<any>) => {
            console.log('res : ', res);
            
            if (res.code == 200) {
                toastSuccess(res.message);
                datatableMutate({});
            }
        }
    });

    const handleDetail = (id : number) => {
        setFormType("detail");
        mutateFind({id : id});
        setOpenModal(true);
    }
    const handleCreate = () => {
        setFormType("create");
        setOpenModal(true);
    }

    const handleEdit = (id : number) => {
        setFormType("edit");
        mutateFind({id : id});
        setOpenModal(true);
    }
    


    const [id, setId] = React.useState(0);
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const handleConfirmationDelete = (id : number) => {
         setId(id);
         setOpenModalDelete(true);
        // console.log('AJBABAJJ DELETE');
    }

    const handleDelete = (id : number) => {
        setFormType("edit");
        mutateDelete({id : id});
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
                title="Products"
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
                                    <FormInput disabled={formType == "detail"} label="Price" name="price" type="text" touched={formik.touched}  value={formik.values.price} onChange={handleFormInput} errors={formik.errors} />
                                    <InputFile disabled={formType == "detail"} label="Image" name="filecode" touched={formik.touched}  value={formik.values.filecode} setFc={(filecode) => formik.setFieldValue("filecode", filecode)} errors={formik.errors} />
                                    <Select disabled={formType == "detail"} label="Status" name="status" options={options} touched={formik.touched} value={formik.values.status} onChange={handleFormInput} errors={formik.errors} />
                                    <LoadingButton disabled={formType == "detail"} loading={isLoadingCreate || isLoadingEdit} >
                                        Submit
                                    </LoadingButton>
                            </form>
                        </div>
                    </Modal.Body>
            </Modal>

            <ConfirmationDelete id={id} openModal={openModalDelete} onDelete={(id) => handleDelete(id)} hideModal={(state) => setOpenModalDelete(state)} />

            {/* <Modal show={openModal} onClose={handleCancel}>
                <Modal.Header>
                    <div className="capitalize">{formType} product</div>
                </Modal.Header>
                    <Modal.Body>
                        <div className="p-6 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this product?
                            </h3>
                            <button onClick={() => handleDelete()} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" >
                                Yes, I'm sure
                            </button>
                            <button onClick={handleCancel} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" >
                                No, cancel
                            </button>
                        </div>
                    </Modal.Body>
            </Modal> */}


        </>
    )
}