"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginFormData, loginSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const LoginForm = () => {
    const router = useRouter();
    const {
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })
    const login = async (data: LoginFormData) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if(result?.error) {
            toast.error(result.error);
        } else {
            toast.success('Login successful!');
            router.push('/dashboard');
        }
    }

    return (
        <form onSubmit={handleSubmit(login)} className="max-w-md w-full flex flex-col gap-8">
            <div>
                <Label htmlFor="email" className="mb-2">Email</Label>
                <Input 
                    id='email'
                    type="email" 
                    placeholder="example@domain.com"
                    className='border-primary/30' 
                    {...register('email')}>
                </Input>
                {errors.email && <span className="text-orange-600 text-sm">{errors.email.message}</span>}
            </div>
            <div>
                <Label htmlFor="password" className="mb-2">Password</Label>
                <Input 
                    id='password' 
                    type="password" 
                    placeholder="Your Password"
                    className='border-primary/30'
                    {...register('password')}>
                </Input>
                {errors.password && <span className="text-orange-600 text-sm">{errors.password.message}</span>}
            </div>
            <Button
                type="submit"
                className="bg-primary/60 text-secondary text-center hover:bg-primary/90 hover:text-secondary/80">
                    Sign In
            </Button>
            <div className="text-center text-sm">
                <span className="text-muted-foreground">Don&apos;t have an account? </span>
                <Link href="/register" className="text-primary/60 hover:underline">
                  Register
                </Link>
              </div>
        </form>
    )
}