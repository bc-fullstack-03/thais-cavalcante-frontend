import { useParams } from "react-router-dom";
import PostItem from "../../components/PostItem";
import { getAuthHeader } from "../../service/auth";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Comment from "../../components/Comment";
import { getPost } from "../../service/post";
import CreateComment from "../CreateComment";

function PostDetails() {
  const { id } = useParams();
  const authHeader = getAuthHeader();
  const [post, setPost] = useState<Post>(false as unknown as Post);

  async function fetchPost() {
    if (typeof id == "string") {
      const post = await getPost(id, authHeader);
      setPost(post);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  async function handlePostChanged() {
    await fetchPost();
  }

  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <Heading className="pl-5 mt-4">Post</Heading>
      {post && <PostItem post={post} onPostLiked={handlePostChanged} />}
      <CreateComment onCommentCreated={handlePostChanged} />
      <Heading className="pl-5 mt-4">Comentários</Heading>
      {post && post.comments.length > 0 && (
        <>
          {post.comments
            .slice()
            .reverse()
            .map((comment) => (
              <Comment
                comment={comment}
                onCommentLiked={handlePostChanged}
                key={comment._id}
              />
            ))}
        </>
      )}
    </div>
  );
}

export default PostDetails;
