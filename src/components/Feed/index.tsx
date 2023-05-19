import { UserCircle } from "@phosphor-icons/react";
import PostItem from "../PostItem/PostItem";
import { useState, useEffect } from "react";
import Text from "../Text";
import Heading from "../Heading";
import { getAuthHeader } from "../../service/mainAPI/auth";
import { getPosts } from "../../service/mainAPI/post";

function Feed() {
  const user = localStorage.getItem("user");

  const [posts, setPosts] = useState<Post[]>([] as Post[]);
  const authHeader = getAuthHeader();

  async function fetchPosts() {
    const posts = await getPosts(authHeader);
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
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
      {posts && posts.map((post: Post) => <PostItem post={post} />)}
    </div>
  );
}

export default Feed;
