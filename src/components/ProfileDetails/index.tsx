import { SignOut } from "@phosphor-icons/react";
import Heading from "../Heading";
import Text from "../Text";
import { useNavigate } from "react-router-dom";
import UpdatePassword from "../UpdatePassword";
import { logOut } from "../../services/auth";
import ProfileData from "../ProfileData";

function ProfileDetails() {
  const navigate = useNavigate();

  function handleLogout() {
    logOut();
    navigate("/");
  }

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <div className="border-b border-gray-regular pl-5 mt-4">
        <div className="w-full md:w-3/4">
          <div className="flex justify-between">
            <Heading>Perfil</Heading>
            <div
              onClick={handleLogout}
              className="flex gap-1 items-center rounded-full px-5 hover:bg-cyan-regular cursor-pointer group"
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
          <ProfileData />
        </div>
      </div>
      <UpdatePassword />
    </div>
  );
}

export default ProfileDetails;
