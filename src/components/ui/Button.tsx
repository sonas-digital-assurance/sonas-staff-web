import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 font-semibold transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        {
          "bg-blue-700 text-white hover:bg-blue-800":
            variant === "primary",

          "bg-white border border-gray-300 hover:bg-gray-100":
            variant === "secondary",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",

          "w-full": fullWidth,
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}