import { UserCircle, Heart } from "@phosphor-icons/react";
import Text from "../Text";

interface CommentProps {
  comment: Comment;
}

function Comment({ comment }: CommentProps) {
  return (
    <>
      {comment && (
        <div className="border-b border-gray-regular pl-5 py-5">
          <div className="flex gap-1">
            <UserCircle size={64} weight="light" className="text-gray-light" />
            <div className="flex flex-col gap-5">
              <Text className="text-white font-bold mt-3">
                {comment.profile.name}
              </Text>
              <Text size="md" className="text-gray-light">
                {comment.description}
              </Text>
              <footer className="flex items-center">
                <Heart size={32} className="text-gray-light" weight="regular" />
                <Text size="md" className="text-gray-light ml-2">
                  {comment.likes.length}
                </Text>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Comment;
