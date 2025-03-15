"use client"

import { toast } from 'sonner';
import { api } from '../../../services/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData, registerSchema } from '../../../lib/schemas';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const RegisterForm = () => {
    const router = useRouter()
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });
    const registerUser = async (data: RegisterFormData) => {
        try {
            await api.post('register', { json:data }).json()
            toast.success('Account registered successfully!')
            router.push('/login')
        } catch {
            toast.error('Failed to register')
        }
    }
    return (
        <form onSubmit={handleSubmit(registerUser)} className="max-w-md w-full flex flex-col gap-8">
            <div>
                <Label htmlFor="username" className="mb-2">Username</Label>
                <Input 
                    id='username'
                    type="username" 
                    placeholder="Your Username"
                    className='border-primary/30' 
                    {...register('username')}>
                </Input>
                {errors.username && <span className="text-orange-600 text-sm">{errors.username.message}</span>}
            </div>
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
                <Label htmlFor="confirmEmail" className="mb-2">Confirm Email</Label>
                <Input 
                    id='confirmEmail'
                    type="confirmEmail" 
                    placeholder="example@domain.com"
                    className='border-primary/30' 
                    {...register('confirmEmail')}>
                </Input>
                {errors.confirmEmail && <span className="text-orange-600 text-sm">{errors.confirmEmail.message}</span>}
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
            <div>
                <Label htmlFor="confirmPassword" className="mb-2">Confirm Password</Label>
                <Input 
                    id='confirmPassword' 
                    type="password" 
                    placeholder="Your Password"
                    className='border-primary/30'
                    {...register('confirmPassword')}>
                </Input>
                {errors.confirmPassword && <span className="text-orange-600 text-sm">{errors.confirmPassword.message}</span>}
            </div>
            <Button
                type="submit"
                className="bg-primary/60 text-secondary text-center hover:bg-primary/90 hover:text-secondary/80">
                    Sign Up
            </Button>
            <div className="text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link href="/login" className="text-primary/60 hover:underline">
                  Sign In
                </Link>
              </div>
        </form>
    )
}