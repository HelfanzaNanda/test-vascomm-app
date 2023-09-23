"use client";
import { LoadingButton } from "@/components/Button/Loading";
import FormInput from "@/components/Form/Input";
import { useLogin } from "@/features/auth";
import { setAuth } from "@/lib/authentication";
import { toastSuccess } from "@/lib/my-toast";
import { LoginInput, LoginInputSchema, LoginResult } from "@/models/Login";
import { FormLogin } from "@/types/auth";
import { GlobalResponse } from "@/types/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function Login() {

    const router = useRouter();

    const { mutate, data, error, isLoading } = useLogin({
        onSuccess : (res : GlobalResponse<LoginResult>) => {
            console.log('res : ', res);
            
            if (res.code == 200) {
                toastSuccess("Logged in successfully");
                setAuth(res.data);
                if (res.data.user.role.name == 'admin') {
                    router.push("/dashboard");
                }else{
                    router.push("/");
                }
            }
        }
    });

    const formik = useFormik<LoginInput>({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async () => {
            const { email, password } = formik.values;
            mutate({
                email, password
            });


        },
        validationSchema: LoginInputSchema,
    })

    const handleFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        formik.setFieldValue(event.target.name, event.target.value);
    };


    return (
        <div className="w-screen h-screen grid grid-cols-2">
            <div className="bg-blue-400 flex flex-col items-center justify-center px-32">
                <div className="font-bold text-4xl mb-3">MyApp</div>
                <div className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit a perferendis nulla voluptatibus quasi vel natus architecto sapiente fugit illo, aliquid praesentium rem magni doloribus. Reprehenderit ratione vitae quaerat dolorem, magni similique debitis fugiat? Aliquam, quibusdam a delectus adipisci aut illum sint eveniet quo voluptatum eos exercitationem totam. Omnis, quos illo? Delectus iusto pariatur rerum ipsum, quae minus sapiente voluptate natus ipsam exercitationem nam cumque atque blanditiis optio, recusandae id vel tempora corrupti nisi? Corrupti fuga maiores asperiores ullam dolorum? Iusto culpa, sint minus libero similique eius veritatis a rerum illum sit aspernatur laudantium tempora ipsum saepe iste exercitationem eligendi!</div>
            </div>
            <div>
                <div className="p-44">
                    <div className="text-2xl font-semibold mb-2">Selamat Datang</div>
                    <div className="mb-10">silahkan masukkan email atau nomor telefon dan password anda untuk mulai menggunakan aplikasi</div>

                        <form className="space-y-6" 
                            onSubmit={formik.handleSubmit}>
                                <FormInput label="Email" name="email" type="text" touched={formik.touched} value={formik.values.email} onChange={handleFormInput} errors={formik.errors} />
                                <FormInput label="Password" name="password" type="password" touched={formik.touched} value={formik.values.password} onChange={handleFormInput} errors={formik.errors} />
                                <LoadingButton loading={isLoading} >
                                    Login
                                </LoadingButton>
                        </form>

                    {/* <form action="">
                        <div className='mb-3'>
                            <label htmlFor="error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500" >
                                Email / Nomor Telpon
                            </label>
                            <input type="text" id="error"  className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="Contoh : admin@gmail.com" />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Oh, snapp!</span> Some error message.
                            </p>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500" >
                                Password
                            </label>
                            <input type="text" id="error"  className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="masukkan password" />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Oh, snapp!</span> Some error message.
                            </p>
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Masuk</button>

                    </form> */}
                </div>
            </div>
        </div>
    )
}