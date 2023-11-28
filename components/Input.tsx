import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        className={twMerge(
          "flex w-full text-sm rounded-md bg-neutral-700 border border-transparent px-3 py-3 file:border-0 file:border-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
