import { z } from "zod";
import * as Yup from "yup";

export const LoginInputSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
        // .min(8, "Password must be at least 8 characters"),
});

export type LoginInput = Yup.InferType<typeof LoginInputSchema>;

const LoginResultSchema = z.object({
    user : z.object({
        id : z.number(),
        name: z.string(),
        email : z.string(),
        phone: z.string(),
        role: z.object({
            id: z.number(),
            name: z.string()
        })
    }),
    jwt: z.object({
        access_token: z.string(),
        token_type: z.string(),
        expires_in: z.string()  
    })
});

export type LoginResult = z.infer<typeof LoginResultSchema>;


