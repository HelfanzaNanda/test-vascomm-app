import { METHOD_POST, METHOD_PUT, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useEditUser = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const id = body.id;
            const params = {
                name : body.name,
                email : body.email,
                phone : body.phone,
                status : body.status,
            }
            return await globalFetch(`users/${id}`, params, METHOD_PUT);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
