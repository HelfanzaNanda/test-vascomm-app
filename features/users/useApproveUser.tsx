import { METHOD_POST, METHOD_PUT, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useApproveUser = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            const id = body.id
            const params = { }
            return await globalFetch(`users/${id}/approve`, params, METHOD_PUT);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
