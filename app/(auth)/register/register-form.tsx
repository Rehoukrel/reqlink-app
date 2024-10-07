"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthErrors } from "@/errors/auth.errors";
import { AuthRegisterDTO, authRegisterSchema } from "@/schemas/auth.schema";
import { authRegisterUsecase } from "@/usecases/auth/register.usecase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function RegisterForm() {
    const form = useForm<AuthRegisterDTO>({
        resolver: zodResolver(authRegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (dto: AuthRegisterDTO) => {
        const result = await authRegisterUsecase(dto);
        if (result?.error === AuthErrors.DuplicateCredentials) {
            toast.error("Email already exists", {
                description: "Please use another email",
            });
        }
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
                                        {...field}
                                        placeholder="john@example.com"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="John Doe" />
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
                                    <Input {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <Button type="submit" className="w-full">
                    Register
                </Button>
            </form>
        </Form>
    );
}
