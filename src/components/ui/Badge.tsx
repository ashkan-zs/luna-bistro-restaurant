import type { ReactNode } from "react";

export type BadgeType = "primary" | "secondary" | "error" | "overlay";
export type BadgeSize = "small" | "normal";

type BadgeProps = {
  children: ReactNode;
  type?: BadgeType;
  size?: BadgeSize;
};

const typeClasses: Record<BadgeType, string> = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container/50 text-on-secondary-container",
  error: "bg-error-container/20 text-error",
  overlay: "bg-secondary/50 text-secondary-container",
};

const sizeClasses: Record<BadgeSize, string> = {
  small: "text-[10px] px-2",
  normal: "text-sm px-3",
};

export default function Badge({
  children,
  type = "secondary",
  size = "small",
}: BadgeProps) {
  return (
    <span
      className={`uppercase font-label-caps font-medium tracking-widest py-1 rounded ${typeClasses[type]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}
