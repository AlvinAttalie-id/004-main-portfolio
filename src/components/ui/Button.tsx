import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-md font-medium transition",
                variant === "primary"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "border border-gray-400 text-gray-200 hover:bg-gray-700",
                className
            )}
            {...props}
        />
    );
}
