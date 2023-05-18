import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface TextProps {
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

function Text({ size = "xl", children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "font-inter",
        {
          "text-xs": size == "sm",
          "text-sm": size == "md",
          "text-md": size == "lg",
          "text-lg": size == "xl",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Text;
