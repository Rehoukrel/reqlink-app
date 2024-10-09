"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLoginDTO, authLoginSchema } from "@/schemas/auth.schema";
import {
    Form,
    FormControl,
    FormDescription,
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
import Link from "next/link";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm() {
    const form = useForm<AuthLoginDTO>({
        resolver: zodResolver(authLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [showPassword, setShowPassword] = useState(false);

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
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        endContent={
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="flex flex-col justify-center items-center"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="size-4 text-muted-foreground" />
                                                ) : (
                                                    <Eye className="size-4 text-muted-foreground" />
                                                )}
                                            </button>
                                        }
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <Button type="submit" className="w-full">
                    Sign In
                </Button>
            </form>
            <div className="py-4">
                <div className="flex justify-center item-center">
                    <FormDescription>
                        No Account?
                        <Link href="/register">
                            <Button variant={"link"}>Create Account</Button>
                        </Link>
                    </FormDescription>
                </div>
                <div className="flex justify-center item-center">
                    <Link href="/forgot-password">
                        <Button variant="link">Forgot Password?</Button>
                    </Link>
                </div>
            </div>
        </Form>
    );
}
