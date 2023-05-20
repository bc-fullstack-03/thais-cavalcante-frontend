import { UserCircle } from "@phosphor-icons/react";
import PostItem from "../PostItem/PostItem";
import { useEffect, useContext } from "react";
import Text from "../Text";
import Heading from "../Heading";
import { FeedContext } from "../../contexts/FeedContext";

function Feed() {
  const user = localStorage.getItem("user");
  const { feed, getFeed } = useContext(FeedContext);

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <div className="border-b border-gray-regular pl-5 mt-4">
        <Heading>Página Inicial</Heading>
        <div className="flex gap-1 items-center my-6">
          <UserCircle size={64} weight="light" className="text-gray-light" />
          <Text className="text-white font-bold">{user}</Text>
        </div>
      </div>
      {feed && feed.map((post: Post) => <PostItem post={post} />)}
    </div>
  );
}

export default Feed;
