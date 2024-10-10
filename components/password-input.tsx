"use client";

import { useState } from "react";
import { Input, InputProps } from "./ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface PasswordInputProps extends InputProps {
    type?: never;
    endIcon?: never;
}

export function PasswordInput({ ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input
            {...props}
            type={showPassword ? "text" : "password"}
            endIcon={
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <EyeIcon className="size-4" />
                    ) : (
                        <EyeOffIcon className="size-4" />
                    )}
                </button>
            }
        />
    );
}
