import { useParams } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import PostItem from "../../components/PostItem/PostItem";
import { getAuthHeader } from "../../service/mainAPI/auth";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Comment from "../../components/Comment";
import { getPost } from "../../service/mainAPI/post";

function PostPage() {
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

  return (
    <MainScreen>
      <div className="basis-5/6 overflow-y-auto scroll-smooth">
        <Heading className="pl-5 mt-4">Post</Heading>
        {post && <PostItem post={post} />}
        <Heading className="pl-5 mt-4">Comments</Heading>
        {post && post.comments.length > 0 && (
          <>
            {post.comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </>
        )}
      </div>
    </MainScreen>
  );
}

export default PostPage;
