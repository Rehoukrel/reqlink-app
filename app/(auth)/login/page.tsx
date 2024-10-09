import { LoginForm } from "./login-form";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function LoginPage() {
    return (
        <main className=" flex lg:justify-between justify-center  grid grid-cols-5 ">
            <div className="w-full h-full col-span-3 pl-12">
                <h1 className="text-4xl font-semibold">Welcome Back!</h1>
                <h1 className="text-2xl">
                    May your voyage toward big dream is succes!
                </h1>
            </div>
            <div className="flex justify-center col-span-2 pt-14">
                <Card className=" w-[350px]">
                    <CardHeader></CardHeader>

                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
