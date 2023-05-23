import {
  CaretCircleLeft,
  CaretCircleRight,
  UserCircle,
} from "@phosphor-icons/react";
import PostItem from "../PostItem";
import { useEffect, useContext, useState, useRef } from "react";
import Text from "../Text";
import Heading from "../Heading";
import { FeedContext } from "../../contexts/FeedContext";

function Feed() {
  const user = localStorage.getItem("user");
  const { feed, getFeed } = useContext(FeedContext);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getFeed(currentPage);
  }, []);

  function scrollToTop() {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }

  function handleNextPage() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    getFeed(nextPage);
    scrollToTop();
  }

  function handlePrevPage() {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    getFeed(prevPage);
    scrollToTop();
  }

  const showNextButton = !(feed.length < 10);
  const showPrevButton = currentPage != 0;

  return (
    <div
      ref={containerRef}
      className="w-screen md:basis-5/6 overflow-y-auto scroll-smooth"
    >
      <div className="border-b border-gray-regular pl-5 mt-4">
        <Heading>Página Inicial</Heading>
        <div className="flex gap-1 items-center my-6">
          <UserCircle size={64} weight="light" className="text-gray-light" />
          <Text className="text-white font-bold">{user}</Text>
        </div>
      </div>
      {feed &&
        feed.map((post: Post) => (
          <PostItem
            post={post}
            key={post._id}
            onPostLiked={() => getFeed(currentPage)}
          />
        ))}
      <div className="flex justify-center gap-3 my-3">
        {showPrevButton && (
          <CaretCircleLeft
            size={48}
            weight="fill"
            className="text-cyan-regular cursor-pointer"
            onClick={handlePrevPage}
          >
            Prev page
          </CaretCircleLeft>
        )}
        {showNextButton && (
          <CaretCircleRight
            size={48}
            weight="fill"
            className="text-cyan-regular cursor-pointer"
            onClick={handleNextPage}
          >
            Next page
          </CaretCircleRight>
        )}
      </div>
    </div>
  );
}

export default Feed;
