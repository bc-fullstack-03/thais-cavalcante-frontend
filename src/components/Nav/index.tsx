import { useState } from "react";
import { House, User, UsersThree } from "@phosphor-icons/react";
import { ParrotIcon } from "../ParrotIcon";
import Text from "../Text";
import { NavItem } from "../NavItem";
import * as Dialog from "@radix-ui/react-dialog";
import CreatePostButton from "../CreatePostButton";
import CreatePostModal from "../CreatePostModal";

function Nav() {
  const navItems = [
    {
      icon: <House size={40} weight="fill" />,
      text: "Página Inicial",
      route: "/home",
    },
    {
      icon: <User size={40} weight="fill" />,
      text: "Perfil",
      route: "/profile",
    },
    {
      icon: <UsersThree size={40} weight="fill" />,
      text: "Amigos",
      route: "/friends",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="basis-6/6 flex h-12 mt-6 flex-row font-inter md:h-screen md:border-r md:basis-1/6 md:border-gray-regular md:flex md:flex-col md:mt-0 md:justify-start md:px-5 md:pt-4">
      <div className="hidden md:flex items-center gap-5 mb-9 pl-2">
        <ParrotIcon width={30} height={68} color="#E1E1E6" />
        <Text className="text-white font-bold">Parrot</Text>
      </div>
      {navItems.map((navItem) => (
        <NavItem.Root route={navItem.route} key={navItem.route}>
          <NavItem.Icon>{navItem.icon}</NavItem.Icon>
          <Text className="hidden md:block text-white font-bold group-hover:text-gray-dark">
            {navItem.text}
          </Text>
        </NavItem.Root>
      ))}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <CreatePostButton />
        <CreatePostModal setIsModalOpen={setIsModalOpen} />
      </Dialog.Root>
    </div>
  );
}

export default Nav;
