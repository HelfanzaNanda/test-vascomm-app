import { useUploadFile } from '@/features/files/useUploadFile';
import { GlobalResponse } from '@/types/response';
import React from 'react'
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
    label: string;
    name: string;
    filecode?: string;
    value: string;
    errors: {[key : string] : any};
    touched: {[key : string] : any};
    disabled?: boolean;
    setFc: (filecode : string) => void;
};

const InputFile: React.FC<FormInputProps> = ({ label, name, touched, value, errors, disabled = false, setFc }) => {
    // const { register, formState: { errors }, } = useFormContext();

    const [filecode, setFilecode] = React.useState("");
    const [event, setEvent] = React.useState<React.ChangeEvent<HTMLInputElement>>();
    const inputFilecode = React.useRef(null);


    const { mutate, isLoading } = useUploadFile({
        onSuccess : (res : GlobalResponse<any>) => {
            if (res.code == 200) {
                setFc(res.data.filecode)
                setFilecode(res.data.filecode);
            }
        }
    });

    const handleUploadFile = (event : React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        mutate({ file })
    }

  return (
    <div>
        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white" htmlFor="file_input" >
            {label}
        </label>
        <input disabled={disabled} onChange={handleUploadFile} className="block w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            id={name} type="file"
        />
        <input value={filecode} ref={inputFilecode} type="hidden" name={name} />
        {errors[name] && touched[name] && (
            <span className="text-red-500 text-xs pt-1 block">
                {errors[name] as string}
            </span>
        )}
    </div>
  )
}

export default InputFile;

