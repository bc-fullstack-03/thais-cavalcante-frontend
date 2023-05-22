import { UserCircle, Chat, Heart } from "@phosphor-icons/react";
import Text from "../Text";
import { Link } from "react-router-dom";
import { getAuthHeader } from "../../service/mainAPI/auth";
import { likePost, unlikePost } from "../../service/mainAPI/post";

interface PostItemProps {
  post: Post;
  onPostLiked: () => void;
}

function PostItem({ post, onPostLiked }: PostItemProps) {
  const loggedInUser = localStorage.getItem("profile") as string;
  console.log(loggedInUser);

  const isPostLiked = post.likes.includes(loggedInUser);
  const authHeader = getAuthHeader();
  const postId = post._id;

  async function handleLikePost() {
    if (isPostLiked) {
      await unlikePost(postId, authHeader);
    } else {
      await likePost(postId, authHeader);
    }

    onPostLiked();
  }

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
            <div
              onClick={handleLikePost}
              className="hover:bg-gray-light/20 rounded-full p-1"
            >
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
            <Text size="md" className="text-gray-light ml-1">
              {post.likes.length}
            </Text>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
