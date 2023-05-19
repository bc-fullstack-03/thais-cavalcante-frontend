import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface TextProps {
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

function Text({ size = "lg", children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "font-inter",
        {
          "text-sm": size == "sm",
          "text-md": size == "md",
          "text-lg": size == "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Text;
