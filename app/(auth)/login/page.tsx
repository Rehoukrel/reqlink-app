import { LoginForm } from "./login-form";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function LoginPage() {
    return (

        <main className="min-h-screen grid grid-cols-5 relative">
            <div className="col-span-3 bg-slate-800">
                <div className="py-32">
                    <h3 className="text-4xl text-background">Welcome Back!</h3>
                    <h6 className="text-xl text-muted">
                        May your voyage toward big dream is success
                    </h6>
                </div>
            </div>

            <div className="col-span-2 bg-gray-50">
                <LoginForm />
            </div>
        </main>
    );
}
