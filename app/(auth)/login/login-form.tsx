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
import { Card, CardContent } from "@/components/ui/card";
import { PasswordInput } from "@/components/password-input";
import { MailIcon, KeyRoundIcon } from "lucide-react";
import Link from "next/link";

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
        <Card className="max-w-sm relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pt-6">
            <CardContent>
                <Form {...form}>
                    <form
                        method="post"
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
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
                                                placeholder="johndoe@example.com"
                                                startIcon={
                                                    <MailIcon className="size-4" />
                                                }
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
                                            <PasswordInput
                                                startIcon={
                                                    <KeyRoundIcon className="size-4" />
                                                }
                                                placeholder="Your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <div className="flex flex-col gap-y-4 items-center">
                            <Button size="lg" type="submit" className="w-full">
                                Login
                            </Button>

                            <span className="text-sm text-center">
                                Don&apos;t have an account?{" "}
                                <Button
                                    variant="link"
                                    className="p-0 h-fit"
                                    asChild
                                >
                                    <Link href="/register">Create Account</Link>
                                </Button>
                            </span>

                            <span className="text-sm text-center">
                                <Button
                                    variant="link"
                                    className="p-0 h-fit"
                                    asChild
                                >
                                    <Link href="/forgot-password">
                                        Forgot Password?
                                    </Link>
                                </Button>
                            </span>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
