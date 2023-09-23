import { METHOD_GET, METHOD_POST, METHOD_PUT, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFindProduct = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            console.log('body : ', body);   
            const id = body.id;
            
            return await globalFetch(`products/${id}`, {}, METHOD_GET);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
