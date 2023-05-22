import { UserCircle, Heart } from "@phosphor-icons/react";
import Text from "../Text";

interface CommentProps {
  comment: Comment;
}

function Comment({ comment }: CommentProps) {
  const loggedInUser = localStorage.getItem("profile");

  const isCommentLiked = comment.likes.find(
    (user: string) => user == loggedInUser
  );

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
                <div className="hover:bg-gray-light/20 rounded-full p-1">
                  <Heart
                    size={32}
                    className={
                      isCommentLiked
                        ? "text-red-600"
                        : "text-gray-light hover:text-red-600"
                    }
                    weight={isCommentLiked ? "fill" : "regular"}
                  />
                </div>
                <Text size="md" className="text-gray-light ml-1">
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
