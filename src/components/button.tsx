
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={`rounded-[30px] px-8 py-2 font-medium cursor-pointer text-white transition ${className}`}
    {...props}
  >
    {children}
  </button>
);
