import { METHOD_DELETE, METHOD_POST, METHOD_PUT, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProduct = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const id = body.id;
            return await globalFetch(`products/${id}`, {}, METHOD_DELETE);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
