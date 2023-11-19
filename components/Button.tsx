import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        {...props}
        className={twMerge(
          "w-full rounded-full px-3 py-3 bg-green-500 text-black font-bold border border-transparent disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition",
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "button";

export default Button;
