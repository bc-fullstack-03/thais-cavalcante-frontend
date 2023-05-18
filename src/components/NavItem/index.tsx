import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  children: ReactNode;
  route: string;
}

function NavItemRoot({ children, route }: NavItemProps) {
  return (
    <Link to={route}>
      <div className="flex items-center gap-3 mb-9 rounded-full hover:bg-cyan-regular group">
        {children}
      </div>
    </Link>
  );
}

interface NavItemIconProps {
  children: ReactNode;
}

function NavItemIcon({ children }: NavItemIconProps) {
  return (
    <Slot className="text-gray-light group-hover:text-gray-dark">
      {children}
    </Slot>
  );
}

export const NavItem = {
  Root: NavItemRoot,
  Icon: NavItemIcon,
};
