import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            startContent,
            endContent,
            wrapperClassName,
            ...props
        },
        ref
    ) => {
        return (
            <div className={cn("w-full relative", wrapperClassName)}>
                {startContent && (
                    <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
                        {startContent}
                    </div>
                )}

                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        startContent && "pl-10",
                        endContent && "pr-10",
                        className
                    )}
                    ref={ref}
                    {...props}
                />

                {endContent && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {endContent}
                    </div>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
