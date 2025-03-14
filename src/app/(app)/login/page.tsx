import {LoginForm} from "@/components/pages/Login/login-form";

export default function Login() {
    return (
        <div className="min-h-screen flex justify-center bg-zinc-900 items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 m-4 p-4 border border-primary/20 bg-black rounded-lg shadow-lg">
                <div className="space-y-16">
                    <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary">
                        Welcome back, Wanderer
                    </h2>
                    <p className="text-center text-secondary/80 justify-center items-center">Take a rest and review your notes</p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}