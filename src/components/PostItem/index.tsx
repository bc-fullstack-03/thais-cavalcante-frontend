import { UserCircle, Chat, Heart } from "@phosphor-icons/react";
import Text from "../Text";
import { Link } from "react-router-dom";

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const loggedInUser = localStorage.getItem("profile");

  const isPostLiked = post.likes.find((user) => user == loggedInUser);

  return (
    <div className="border-b border-gray-regular pl-5 py-5">
      <div className="flex gap-1">
        <UserCircle size={64} weight="light" className="text-gray-light" />
        <div className="flex flex-col gap-5">
          <Text className="text-white font-bold mt-3">{post.profile.name}</Text>
          {post.image ? (
            <img
              src={`http://localhost:9000/${post.description}`}
              className="max-w-lg rounded-lg"
            ></img>
          ) : (
            <Text size="md" className="text-gray-light">
              {post.description}
            </Text>
          )}
          <footer className="flex items-center">
            <Link to={`/post/${post._id}`} className="flex items-center mr-14">
              <Chat size={32} className="text-gray-light" />
              <Text size="md" className="text-gray-light ml-2">
                {post.comments.length}
              </Text>
            </Link>
            <div className="hover:bg-gray-light/20 rounded-full p-1">
              <Heart
                size={32}
                className={
                  isPostLiked
                    ? "text-red-600"
                    : "text-gray-light hover:text-red-600"
                }
                weight={isPostLiked ? "fill" : "regular"}
              />
            </div>
            <Text size="md" className="text-gray-light ml-2">
              {post.likes.length}
            </Text>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
