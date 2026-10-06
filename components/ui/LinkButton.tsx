import { ReactNode } from "react"
import Link from "next/link"

type ButtonProps = {
    children: ReactNode,
    variant?: "primary" | "secondary" | "danger",
    size?: "sm" | "md" | "lg" | "xl",
    fullWidth?: boolean,
    href: string
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    href
}: ButtonProps) {

    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 active:bg-blue-900 text-white",
        secondary: "border border-border text-text-primary hover:bg-surface active:bg-surface",
        danger: "bg-red-600 hover:bg-red-700 active:bg-red-900 text-white",
    }

    const sizeClasses = {
        sm: "text-sm py-1 px-2 rounded-md",
        md: "text-base py-2 px-4 rounded-md",
        lg: "text-lg py-3 px-6 rounded-lg",
        xl: "text-xl py-4 px-8 rounded-lg"
    }

    return (
        <Link
            href={href}
            className={`
                transition-colors font-medium
                ${fullWidth ? "w-full" : ""} 
                ${sizeClasses[size]} 
                ${variantClasses[variant]}
            `}
        >
            {children}
        </Link>
    )
}