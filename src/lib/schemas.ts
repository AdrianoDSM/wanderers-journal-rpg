import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long!').nonempty(),
    email: z.string().email().nonempty(),
    confirmEmail: z.string().email().nonempty(),
    password: z.string().min(6, 'Password must be at least 6 characters long!').nonempty(),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters long!').nonempty(),
})
.refine((data) => data.email === data.confirmEmail, {
    message: 'Emails do not match!',
    path: ['confirmEmail'],
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
})

export const loginSchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6, 'Password must be at least 6 characters long!').nonempty()
})

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
