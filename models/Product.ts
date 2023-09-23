import { z } from "zod";
import * as Yup from "yup";

const ProductResultSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    file_id: z.number(),
    status: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    file: z.object({
        id: z.number(),
        filecode: z.string(),
        original_name: z.string(),
        filepath: z.string(),
        fileurl: z.string(),
        filename: z.string(),
    })
});

const ProductDatatableResultSchema = z.object({
    data: z.array(ProductResultSchema),
    recordsTotal: z.number(),
    recordsFiltered: z.number(),
    selectableRows: z.any().optional(),
    onSelectedRowsChange : z.void(),
    expandableRows: z.boolean().optional(),
    expandableRowsComponent : z.void(),
    mutate: z.void(),

});
const ProductDatatableRequestSchema = z.object({
    start: z.number(),
    length: z.number(),
    search: z.number(),
    order: z.object({
        col: z.string(),
        dir: z.string()
    }),
});

export const ProductInputSchema = Yup.object().shape({
    id: Yup.number(),
    name: Yup.string().required("name is required"),
    price: Yup.string().required("price is required"),
    filecode: Yup.string().required("file is required"),
    status: Yup.string().required("status is required"),
});




export type ProductResult = z.infer<typeof ProductResultSchema>;
export type ProductDatatableResult = z.infer<typeof ProductDatatableResultSchema>;
export type ProductDatatableRequest = z.infer<typeof ProductDatatableRequestSchema>;
export type ProductInput = Yup.InferType<typeof ProductInputSchema>;
