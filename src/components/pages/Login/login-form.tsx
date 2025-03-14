"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginFormData, loginSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

export const LoginForm = () => {
    const {register, handleSubmit} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })
    const {push} = useRouter()
    const login = (data: LoginFormData) => {
        console.log(data)
        return push('/')
    }

    return (
        <form onSubmit={handleSubmit(login)} className="max-w-md w-full flex flex-col gap-8">
            <div>
                <Label htmlFor="email" className="mb-2">Email</Label>
                <Input 
                    id='email'
                    type="email" 
                    placeholder="example@domain.com" 
                    {...register('email')}>

                </Input>
                
            </div>
            <div>
                <Label htmlFor="password" className="mb-2">Password</Label>
                <Input 
                    id='password' 
                    type="password" 
                    placeholder="Your Password"
                    {...register('password')}>

                    </Input>
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