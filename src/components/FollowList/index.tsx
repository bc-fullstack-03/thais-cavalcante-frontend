import { useEffect, useState } from "react";
import Heading from "../Heading";
import { getAuthHeader } from "../../services/auth";
import ProfileItem from "../ProfileItem";
import { getProfiles } from "../../services/profile";
import EmptyState from "../EmptyState";
import { useParams } from "react-router-dom";

interface FollowListInterface {
  listType: "following" | "followers";
}

function FollowList({ listType }: FollowListInterface) {
  const { id } = useParams();
  const authHeader = getAuthHeader();
  const user = localStorage.getItem("user");
  const [following, setFollowing] = useState<Profile[]>([] as Profile[]);
  const [followers, setFollowers] = useState<Profile[]>([] as Profile[]);

  async function fetchProfile() {}

  async function fetchFollow() {
    const allProfiles = await getProfiles(authHeader);
    const following = allProfiles.filter((profile: Profile) => {
      return profile.followers.some((followerId: string) => followerId == id);
    });
    setFollowing(following);

    const followers = allProfiles.filter((profile: Profile) => {
      return profile.following.some((followingId: string) => followingId == id);
    });
    setFollowers(followers);
  }

  useEffect(() => {
    fetchFollow();
  }, []);

  async function handleFollowChanged() {
    await fetchProfile();
  }

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <Heading className="mt-4 ml-5">
        {listType == "following"
          ? `Perfis que ${user} está seguindo`
          : `Seguidores de ${user}`}
      </Heading>
      {listType == "following"
        ? following &&
          following.map((profile) => (
            <ProfileItem
              profile={profile}
              key={profile.user}
              onUserFollowed={handleFollowChanged}
            />
          ))
        : followers &&
          followers.map((profile) => (
            <ProfileItem
              profile={profile}
              key={profile.user}
              onUserFollowed={handleFollowChanged}
            />
          ))}
      {listType == "following" && following && following.length == 0 && (
        <EmptyState message={`${user} ainda não segue ninguém.`} />
      )}
      {listType == "followers" && followers && followers.length == 0 && (
        <EmptyState message={`${user} ainda não tem seguidores.`} />
      )}
    </div>
  );
}

export default FollowList;
