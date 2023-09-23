import { z } from "zod";
import * as Yup from "yup";

const UserResultSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.number(),
    phone: z.number(),
    status: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

const UserDatatableResultSchema = z.object({
    data: z.array(UserResultSchema),
    recordsTotal: z.number(),
    recordsFiltered: z.number(),
    selectableRows: z.any().optional(),
    onSelectedRowsChange : z.void(),
    expandableRows: z.boolean().optional(),
    expandableRowsComponent : z.void(),
    mutate: z.void(),

});
const UserDatatableRequestSchema = z.object({
    start: z.number(),
    length: z.number(),
    search: z.number(),
    order: z.object({
        col: z.string(),
        dir: z.string()
    }),
});

export const UserInputSchema = Yup.object().shape({
    id: Yup.number(),
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required").email(),
    phone: Yup.string().required("phone is required").matches( /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g, "Invalid phone number" ),
    status: Yup.string().required("status is required"),
});




export type UserResult = z.infer<typeof UserResultSchema>;
export type UserDatatableResult = z.infer<typeof UserDatatableResultSchema>;
export type UserDatatableRequest = z.infer<typeof UserDatatableRequestSchema>;
export type UserInput = Yup.InferType<typeof UserInputSchema>;
