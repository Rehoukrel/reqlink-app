import { z } from "zod";

export const authLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, 'Password is required'),
})

export const authRegisterSchema = z.object({
    email: z.string().email(),
    name: z.string().min(1, 'Name is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords does not match',
})

export type AuthLoginDTO = z.infer<typeof authLoginSchema>;
export type AuthRegisterDTO = z.infer<typeof authRegisterSchema>;