import React from 'react';
import styles from "./Button.module.css";
import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant: "contained" | "outlined" | "text";
  color: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
  variant = "contained",
  color = "primary",
  size = "md",
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={cn(styles.btn, {
          [styles.contained]: variant === "contained",
          [styles.outlined]: variant === "outlined",
          [styles.text]: variant === "text",
          [styles.primary]: color === "primary",
          [styles.secondary]: color === "secondary",
          [styles.sm]: size === "sm",
          [styles.md]: size === "md",
          [styles.lg]: size === "lg",
        })}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={cn(styles.btn, {
          [styles.contained]: variant === "contained",
          [styles.outlined]: variant === "outlined",
          [styles.text]: variant === "text",
          [styles.primary]: color === "primary",
          [styles.secondary]: color === "secondary",
          [styles.sm]: size === "sm",
          [styles.md]: size === "md",
          [styles.lg]: size === "lg",
        })}
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default Button;
