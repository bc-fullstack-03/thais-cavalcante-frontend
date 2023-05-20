import React, { createContext, useState, ReactNode } from "react";
import { getAuthHeader } from "../service/mainAPI/auth";
import { getPosts } from "../service/mainAPI/post";

interface FeedContextData {
  feed: Post[];
  getFeed: () => Promise<void>;
}

interface FeedProviderProps {
  children: ReactNode;
}

const FeedContext = createContext<FeedContextData>({
  feed: [] as Post[],
  getFeed: async () => {},
});

const FeedProvider: React.FC<FeedProviderProps> = ({ children }) => {
  const [feed, setFeed] = useState<Post[]>([] as Post[]);

  const getFeed = async () => {
    const authHeader = getAuthHeader();
    const posts = await getPosts(authHeader);
    setFeed(posts);
  };

  return (
    <FeedContext.Provider value={{ feed, getFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

export { FeedContext, FeedProvider };
