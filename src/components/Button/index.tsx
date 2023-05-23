import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ children, className, onClick, disabled }: ButtonProps) {
  const buttonClasses = `bg-cyan-regular h-10 font-inter text-md font-semibold transition-colors hover:bg-cyan-light rounded ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
