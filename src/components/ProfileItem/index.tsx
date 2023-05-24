import { UserCircle } from "@phosphor-icons/react";
import Text from "../Text";
import Button from "../Button";
import { getAuthHeader } from "../../services/auth";
import { followProfile } from "../../services/profile";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface ProfileItemProps {
  profile: Profile;
  onUserFollowed: () => void;
}

function ProfileItem({ profile, onUserFollowed }: ProfileItemProps) {
  const loggedInUser = localStorage.getItem("profile") as string;

  const isProfileFollowed = profile.followers.includes(loggedInUser);
  const authHeader = getAuthHeader();
  const profileId = profile._id;

  async function handlefollowProfile() {
    await followProfile(profileId, authHeader);

    onUserFollowed();
  }

  return (
    <div className="border-b border-gray-regular pl-5">
      <div className="flex gap-1 items-center mt-6 mb-2">
        <UserCircle size={64} weight="light" className="text-gray-light" />
        <Text className="text-white font-bold">{profile.name}</Text>
      </div>
      <div className="flex flex-col gap-2 ml-2 mb-5">
        {profile.followers.length > 0 && (
          <Link to={`/followers/${profile._id}`}>
            <Text size="sm" className="text-gray-light hover:underline">
              {profile.followers.length} Seguidores
            </Text>
          </Link>
        )}
        {profile.following.length > 0 && (
          <Link to={`/following/${profile._id}`}>
            <Text size="sm" className="text-gray-light hover:underline">
              Seguindo {profile.following.length}
            </Text>
          </Link>
        )}
      </div>
      <Button
        disabled={isProfileFollowed}
        className={clsx("w-80 mb-6", {
          "bg-gray-regular hover:bg-gray-regular": isProfileFollowed,
        })}
        onClick={handlefollowProfile}
      >
        {isProfileFollowed ? "Seguindo" : "Seguir"}
      </Button>
    </div>
  );
}

export default ProfileItem;
