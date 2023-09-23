import { z } from "zod";

export const LoginInputSchema = z.object({
    email: z .string({ required_error: "Email is required", })
        .min(1, "Email is required"),
    password: z .string({ required_error: "Password is required", })
        .min(1, "Password is required")
        // .min(8, "Password must be at least 8 characters"),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;

const DashboardCardResultSchema = z.object({
    desc: z.string(),
    total: z.number(),
});

const DashboardCardResultsSchema = z.array(DashboardCardResultSchema);

export type DashboardCardResult = z.infer<typeof DashboardCardResultSchema>;
export type DashboardCardResults = z.infer<typeof DashboardCardResultsSchema>;


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

const ProductResultsSchema = z.array(ProductResultSchema);



export type DashboardTableResult = z.infer<typeof ProductResultSchema>;
export type DashboardTableResults = z.infer<typeof ProductResultsSchema>;



