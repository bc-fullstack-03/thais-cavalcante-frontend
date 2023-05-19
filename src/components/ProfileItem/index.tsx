import { UserCircle } from "@phosphor-icons/react";
import Text from "../Text";
import Button from "../Button";

interface ProfileItemProps {
  profile: Profile;
}

function ProfileItem({ profile }: ProfileItemProps) {
  return (
    <div className="border-b border-gray-regular pl-5">
      <div className="flex gap-1 items-center mt-6 mb-2">
        <UserCircle size={64} weight="light" className="text-gray-light" />
        <Text className="text-white font-bold">{profile.name}</Text>
      </div>
      <div className="flex flex-col gap-2 ml-2 mb-5">
        {profile.followers.length > 0 && (
          <Text size="sm" className="text-gray-light">
            {profile.followers.length} Seguidores
          </Text>
        )}
        {profile.following.length > 0 && (
          <Text size="sm" className="text-gray-light">
            Seguindo {profile.following.length}
          </Text>
        )}
      </div>
      <Button className="w-80 mb-6">Seguir</Button>
    </div>
  );
}

export default ProfileItem;
