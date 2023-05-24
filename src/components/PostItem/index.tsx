import { UserCircle, Chat, Heart, Trash } from "@phosphor-icons/react";
import Text from "../Text";
import { Link } from "react-router-dom";
import { getAuthHeader } from "../../services/auth";
import { deletePost, likePost, unlikePost } from "../../services/post";
import { useNavigate } from "react-router-dom";

interface PostItemProps {
  post: Post;
  onPostChanged: () => void;
}

function PostItem({ post, onPostChanged }: PostItemProps) {
  const loggedInUser = localStorage.getItem("profile") as string;
  const navigate = useNavigate();

  const isPostLiked = post.likes.includes(loggedInUser);
  const authHeader = getAuthHeader();
  const postId = post._id;

  async function handleLikePost() {
    if (isPostLiked) {
      await unlikePost(postId, authHeader);
    } else {
      await likePost(postId, authHeader);
    }

    onPostChanged();
  }

  async function handleDeletePost() {
    await deletePost(postId, authHeader);
    onPostChanged();
    navigate("/home");
  }

  return (
    <div className="border-b border-gray-regular p-5">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <UserCircle size={64} weight="light" className="text-gray-light" />
          <div className="flex flex-col gap-5 w-3/4">
            <Text className="text-white font-bold mt-3">
              {post.profile.name}
            </Text>
            <Text size="md" className="text-gray-light font-bold">
              {post.title}
            </Text>
            {post.image ? (
              <img
                src={post.description}
                className="max-w-[270px] md:max-w-md lg:max-w-lg rounded-lg"
              ></img>
            ) : (
              <Text size="md" className="text-gray-light">
                {post.description}
              </Text>
            )}
            <footer className="flex items-center">
              <Link
                to={`/post/${post._id}`}
                className="flex items-center mr-14"
              >
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
        {loggedInUser == post.profile._id && (
          <Trash
            size={32}
            className="text-gray-regular cursor-pointer"
            onClick={handleDeletePost}
          />
        )}
      </div>
    </div>
  );
}

export default PostItem;
