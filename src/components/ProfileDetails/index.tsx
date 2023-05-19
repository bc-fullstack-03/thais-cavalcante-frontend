import { UserCircle, SignOut } from "@phosphor-icons/react";
import Heading from "../Heading";
import Text from "../Text";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../service/mainAPI/auth";

function ProfileDetails() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  function handleLogout() {
    logOut();
    navigate("/");
  }

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <div className="border-b border-gray-regular pl-5 mt-4">
        <div className="w-5/6 flex justify-between">
          <Heading>Perfil</Heading>
          <div
            onClick={handleLogout}
            className="flex gap-1 items-center rounded-full px-5 hover:bg-cyan-regular group"
          >
            <SignOut
              size={38}
              weight="fill"
              className="text-gray-light group-hover:text-gray-dark"
            />
            <Text className="text-white font-bold group-hover:text-gray-dark">
              Sair
            </Text>
          </div>
        </div>
        <div className="flex gap-1 items-center mt-4 mb-6">
          <UserCircle size={64} weight="light" className="text-gray-light" />
          <Text className="text-white font-bold">{user}</Text>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
