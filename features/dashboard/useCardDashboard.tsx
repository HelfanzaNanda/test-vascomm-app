import { METHOD_GET, METHOD_POST, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { useMutation } from "@tanstack/react-query";

export const useCardDashboard = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
            return await globalFetch("dashboard/card", body, METHOD_GET);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};
