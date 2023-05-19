import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className, onClick }: ButtonProps) {
  const buttonClasses = `bg-cyan-regular h-10 font-inter text-md font-semibold transition-colors hover:bg-cyan-light rounded ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
