import { UserCircle, Chat, Heart } from "@phosphor-icons/react";
import { useState } from "react";
import Text from "../Text";

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="border-b border-gray-regular pl-5 py-5">
      <div className="flex gap-1">
        <UserCircle size={64} weight="light" className="text-gray-light" />
        <div className="flex flex-col gap-5">
          <Text className="text-white font-bold mt-3">{post.profile.name}</Text>
          <Text size="md" className="text-gray-light">
            {post.description}
          </Text>
          <footer className="flex items-center">
            <Chat size={32} className="text-gray-light" />
            <Text size="md" className="text-gray-light ml-2 mr-14">
              {post.comments.length}
            </Text>
            <Heart
              size={32}
              className={isHovered ? "text-red-600" : "text-gray-light"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              weight={isHovered ? "fill" : "regular"}
            />
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
