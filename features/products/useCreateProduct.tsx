import { METHOD_POST, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useCreateProduct = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            return await globalFetch("products", body, METHOD_POST);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
