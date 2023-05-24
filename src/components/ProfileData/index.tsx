import { UserCircle } from "@phosphor-icons/react";
import Text from "../Text";
import { useEffect, useState } from "react";
import { getAuthHeader } from "../../services/auth";
import { getProfile } from "../../services/profile";
import { Link } from "react-router-dom";

function ProfileData() {
  const authHeader = getAuthHeader();
  const profileId = localStorage.getItem("profile") as string;
  const user = localStorage.getItem("user") as string;
  const [profile, setProfile] = useState<Profile>({} as Profile);

  async function fetchProfile() {
    const profile = await getProfile(profileId, authHeader);
    setProfile(profile);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile);

  return (
    <>
      {profile && (
        <div className="flex gap-7 mt-4 mb-6">
          <UserCircle size={64} weight="light" className="text-gray-light" />
          <div className="flex flex-col">
            <Text className="text-white font-bold">{profile.name}</Text>
            <Text className="text-white font-bold">{user}</Text>
          </div>
          <div className="flex flex-col">
            {profile.followers && profile.followers.length > 0 && (
              <Link to={`/followers/${profile._id}`}>
                <Text className="text-white font-bold hover:underline">
                  {profile.followers.length} Seguidores
                </Text>
              </Link>
            )}
            {profile.following && profile.following.length > 0 && (
              <Link to={`/following/${profile._id}`}>
                <Text className="text-white font-bold hover:underline">
                  Seguindo {profile.following.length}
                </Text>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileData;
