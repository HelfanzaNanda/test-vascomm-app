import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
};

const FormInput: React.FC<FormInputProps> = ({ label, name, type = "text", placeholder = " " }) => {
    const { register, formState: { errors }, } = useFormContext();
    return (
        <div className="">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
                {...register(name)}
            />
            {errors[name] && (
                <span className="text-red-500 text-xs pt-1 block">
                    {errors[name]?.message as string}
                </span>
            )}
        </div>
    );
};

export default FormInput;