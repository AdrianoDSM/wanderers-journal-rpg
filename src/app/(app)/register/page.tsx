import { RegisterForm } from "@/components/pages/Register/register-form";

export default function Register() {
    return (
        <div className="min-h-screen flex justify-center bg-zinc-900 items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 m-4 p-4 border border-primary/20 bg-black rounded-lg shadow-lg">
                <div className="space-y-16">
                    <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary">
                    Begin Your Journey
                    </h2>
                    <p className="text-center text-secondary/80 justify-center items-center">Create an account to start chronicling your adventures</p>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>            
    )
}