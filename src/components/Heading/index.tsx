import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface HeadingProps {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

function Heading({ size = "md", asChild, children, className }: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "text-white font-inter font-bold",
        {
          "text-md": size == "sm",
          "text-lg": size == "md",
          "text-xl": size == "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Heading;
