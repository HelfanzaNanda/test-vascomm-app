import { METHOD_POST, METHOD_PUT, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useEditProduct = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const id = body.id;
            const params = {
                name : body.name,
                price : body.price,
                filecode : body.filecode,
                status : body.status,
            }
            return await globalFetch(`products/${id}`, params, METHOD_PUT);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
