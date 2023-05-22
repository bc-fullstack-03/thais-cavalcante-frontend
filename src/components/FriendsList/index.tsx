import { useEffect, useState } from "react";
import Heading from "../Heading";
import { getAuthHeader } from "../../service/mainAPI/auth";
import ProfileItem from "../ProfileItem";
import { getProfiles } from "../../service/mainAPI/profile";

function FriendsList() {
  const authHeader = getAuthHeader();
  const [profiles, setProfiles] = useState<Profile[]>([] as Profile[]);
  const loggedInUser = localStorage.getItem("profile");

  async function fetchProfiles() {
    const allProfiles = await getProfiles(authHeader);
    const friends = allProfiles.filter(
      (profile: Profile) => profile._id != loggedInUser
    );
    setProfiles(friends);
  }

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <Heading className="mt-4 ml-5">Amigos</Heading>
      {profiles &&
        profiles.map((profile) => (
          <ProfileItem profile={profile} key={profile.user} />
        ))}
    </div>
  );
}

export default FriendsList;
