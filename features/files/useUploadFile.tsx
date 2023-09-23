import { METHOD_POST, globalFetch, uploadFiles } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useUploadFile = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (file) => {

            // console.log('file : ', file);
            

            const formData = new FormData();
            formData.append('file', file.file);
            

            return await uploadFiles("files", formData, METHOD_POST);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
