import React from 'react'
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
    label: string;
    name: string;
    options: Array<any>;
    value: string;
    errors: {[key : string] : any};
    touched: {[key : string] : any};
    disabled?: boolean;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Select: React.FC<FormInputProps> = ({ label, name, options, touched, value, errors, disabled = false, onChange }) => {
    // const { register, formState: { errors }, } = useFormContext();

  return (
    <>
        <label htmlFor={name} className="text-xs font-medium text-gray-900 dark:text-white">{label}</label>
        <select disabled={disabled} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            //  {...register(name)}
            value={value} onChange={onChange} name={name}
        >
            {
                options.map((opt, key) => (
                    <option key={key} value={opt.value}>{opt.label}</option>        
                ))
            }
        </select>
        {errors[name] && touched[name] && (
            <span className="text-red-500 text-xs pt-1 block">
                {errors[name] as string}
            </span>
        )}
    </>
  )
}

export default Select;