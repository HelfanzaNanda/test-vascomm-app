import { METHOD_GET, METHOD_POST, globalFetch, uploadFiles } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useFetchImages = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (file) => {
            return await globalFetch("files/images", {}, METHOD_GET);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
