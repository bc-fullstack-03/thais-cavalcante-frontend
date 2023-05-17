import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

function Button({ children, className }: ButtonProps) {
  const buttonClasses = `bg-cyan-regular h-10 font-semibold transition-colors hover:bg-cyan-light rounded ${className}`;

  return <button className={buttonClasses}>{children}</button>;
}

export default Button;
