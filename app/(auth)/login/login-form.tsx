"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLoginDTO, authLoginSchema } from "@/schemas/auth.schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authLoginUsecase } from "@/usecases/auth/login.usecase";
import { AuthErrors } from "@/errors/auth.errors";
import { toast } from "sonner";

export function LoginForm() {
    const form = useForm<AuthLoginDTO>({
        resolver: zodResolver(authLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (dto: AuthLoginDTO) => {
        const result = await authLoginUsecase(dto);

        if (result?.error) {
            if (result.error === AuthErrors.InvalidCredentials) {
                toast.error("Invalid email or password", {
                    description: "Please check your credentials and try again",
                });
                return;
            }
            toast.error("An error occurred: " + result.error);
            return;
        }

        toast.success("Login successful", {
            description: "Redirecting...",
        });
    };

    return (
        <Form {...form}>
            <form
                method="post"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </Form>
    );
}
