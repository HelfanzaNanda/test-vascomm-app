import { METHOD_POST, globalFetch } from "@/lib/api-instance";
import { handleApiError } from "@/lib/helpers";
import { ProductDatatableRequest } from "@/models/Product";
import { GlobalResponse } from "@/types/response";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useDatatableProducts = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body : ProductDatatableRequest) => {
            
            let path =  "products/datatables";

            console.log('BODY : ', body);
            const start = 0;
            const length = 10;
            if (!body.start) {
                body.start = start;
            }
            if (!body.length) {
                body.length = length;
            }

            body.order = {
                'col' : 'created_at',
                'dir' : 'desc',
            };

            const params = {
                search : body.search,
                start: body.start,
                length: body.length,
                order: body.order
            };

            return await globalFetch(path, params, METHOD_POST);
        },
        onSuccess,
        onError : (error : any) => {
            handleApiError(error);
        }
    });
};