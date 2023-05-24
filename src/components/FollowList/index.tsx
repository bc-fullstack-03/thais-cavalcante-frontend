import { useEffect, useState } from "react";
import Heading from "../Heading";
import { getAuthHeader } from "../../services/auth";
import ProfileItem from "../ProfileItem";
import { getProfile, getProfiles } from "../../services/profile";
import EmptyState from "../EmptyState";
import { useParams } from "react-router-dom";

interface FollowListInterface {
  listType: "following" | "followers";
}

function FollowList({ listType }: FollowListInterface) {
  const { id } = useParams();
  const authHeader = getAuthHeader();
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [following, setFollowing] = useState<Profile[]>([] as Profile[]);
  const [followers, setFollowers] = useState<Profile[]>([] as Profile[]);

  async function fetchProfile() {
    if (typeof id == "string") {
      const profile = await getProfile(id, authHeader);
      setProfile(profile);
    }
  }

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
    fetchProfile();
    fetchFollow();
  }, [id]);

  async function handleFollowChanged() {
    await fetchFollow();
  }

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <Heading className="mt-4 ml-5">
        {listType == "following"
          ? `Perfis que ${profile.name} está seguindo`
          : `Seguidores de ${profile.name}`}
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
        <EmptyState message={`${profile.name} ainda não segue ninguém.`} />
      )}
      {listType == "followers" && followers && followers.length == 0 && (
        <EmptyState message={`${profile.name} ainda não tem seguidores.`} />
      )}
    </div>
  );
}

export default FollowList;
