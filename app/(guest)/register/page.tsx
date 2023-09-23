"use client";
import { LoadingButton } from "@/components/Button/Loading";
import FormInput from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import { useLogin } from "@/features/auth";
import { useRegister } from "@/features/auth/userRegister";
import { setAuth } from "@/lib/authentication";
import { toastSuccess } from "@/lib/my-toast";
import { LoginInput, LoginInputSchema, LoginResult } from "@/models/Login";
import { UserInput, UserInputSchema, UserResult } from "@/models/User";
import { FormLogin } from "@/types/auth";
import { GlobalResponse } from "@/types/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function Register() {

    const router = useRouter();
    const { mutate, data, error, isLoading } = useRegister({
        onSuccess : (res : GlobalResponse<UserResult>) => {
            console.log('res : ', res);
            if (res.code == 200) {
                toastSuccess(res.message);
                router.push("/");
            }
        }
    });

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
            mutate({
                status, name, email, phone
            });


        },
        validationSchema: UserInputSchema,
    })

    const handleFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        formik.setFieldValue(event.target.name, event.target.value);
    };
   
    const options = [
        { label: "ACTIVE", value: "ACTIVE" },
        { label: "NOT ACTIVE", value: "NOT ACTIVE" },
    ]

    return (
        <div className="w-screen h-screen grid grid-cols-2">
            <div className="bg-blue-400 flex flex-col items-center justify-center px-32">
                <div className="font-bold text-4xl mb-3">MyApp</div>
                <div className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit a perferendis nulla voluptatibus quasi vel natus architecto sapiente fugit illo, aliquid praesentium rem magni doloribus. Reprehenderit ratione vitae quaerat dolorem, magni similique debitis fugiat? Aliquam, quibusdam a delectus adipisci aut illum sint eveniet quo voluptatum eos exercitationem totam. Omnis, quos illo? Delectus iusto pariatur rerum ipsum, quae minus sapiente voluptate natus ipsam exercitationem nam cumque atque blanditiis optio, recusandae id vel tempora corrupti nisi? Corrupti fuga maiores asperiores ullam dolorum? Iusto culpa, sint minus libero similique eius veritatis a rerum illum sit aspernatur laudantium tempora ipsum saepe iste exercitationem eligendi!</div>
            </div>
            <div>
                <div className="p-44">
                    <div className="text-2xl font-semibold mb-2">Selamat Datang</div>
                    <div className="mb-10">silahkan registasi untuk mulai menggunakan aplikasi</div>

                    <form className="space-y-6"
                        onSubmit={formik.handleSubmit}>
                        <FormInput label="Name" name="name" type="text" touched={formik.touched} value={formik.values.name} onChange={handleFormInput} errors={formik.errors} />
                        <FormInput label="Email" name="email" type="email" touched={formik.touched} value={formik.values.email} onChange={handleFormInput} errors={formik.errors} />
                        <FormInput label="Phone" name="phone" type="text" touched={formik.touched} value={formik.values.phone} onChange={handleFormInput} errors={formik.errors} />
                        
                        {/* <Select label="Status" name="status" options={options} touched={formik.touched} value={formik.values.status} onChange={handleFormInput} errors={formik.errors} /> */}
                        <LoadingButton loading={isLoading} >
                            Submit
                        </LoadingButton>
                    </form>
                </div>
            </div>
        </div>
    )
}