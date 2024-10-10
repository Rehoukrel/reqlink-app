import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
    "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            iconPosition: {
                none: "",
                start: "pl-10",
                end: "pr-10",
                both: "px-10",
            },
            defaultHeight: {
                default: "h-9",
                sm: "h-8",
                lg: "h-10",
            },
        },
        defaultVariants: {
            defaultHeight: "lg",
            iconPosition: "none",
        },
    }
);

export interface InputProps
    extends VariantProps<typeof inputVariants>,
        React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;

    wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,

            wrapperClassName,
            iconPosition = "none",
            defaultHeight,
            startIcon,
            endIcon,
            type,
            ...props
        },
        ref
    ) => {

        const hasStartIcon = !!startIcon;
        const hasEndIcon = !!endIcon;
        const hasBothIcons = hasStartIcon && hasEndIcon;

        if (hasBothIcons) iconPosition = "both";
        if (hasStartIcon && !hasEndIcon) iconPosition = "start";
        if (!hasStartIcon && hasEndIcon) iconPosition = "end";

        return (
            <div className={cn("w-full relative", wrapperClassName)}>
                {startIcon && (
                    <span className="absolute inline-flex items-center justify-center text-muted-foreground top-1/2 -translate-y-1/2 ml-3.5">
                        {startIcon}
                    </span>

                )}

                <input
                    type={type}
                    className={cn(

                        inputVariants({ iconPosition, defaultHeight }),

                        className
                    )}
                    ref={ref}
                    {...props}
                />

                {endIcon && (
                    <span className="absolute inline-flex items-center justify-center text-muted-foreground top-1/2 right-0 -translate-y-1/2 mr-3.5">
                        {endIcon}
                    </span>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
