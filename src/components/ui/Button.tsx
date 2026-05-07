import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "surface"
  | "navScrolled"
  | "navTransparent";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:shadow-xl hover:bg-neutral-100",
  secondary:
    "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
  surface: "bg-surface text-primary hover:scale-105",
  navScrolled: "bg-primary text-on-primary hover:opacity-90",
  navTransparent: "bg-white text-black hover:bg-neutral-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-6 py-2 text-sm",
  medium: "px-10 py-3",
  large: "h-14 px-8 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-lg font-bold transition-all cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
