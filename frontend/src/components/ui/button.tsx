import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "default" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border text-foreground hover:bg-muted",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "md", children, ...props }, ref) => {
        const classes = [
            "rounded-xl font-semibold transition-all shadow-md hover:shadow-lg",
            sizeClasses[size],
            variantClasses[variant],
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <button
                ref={ref}
                className={classes}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
