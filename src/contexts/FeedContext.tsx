import React, { createContext, useState, ReactNode } from "react";
import { getAuthHeader } from "../services/auth";
import { getPosts } from "../services/post";

interface FeedContextData {
  feed: Post[];
  getFeed: (page?: number) => Promise<void>;
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

  const getFeed = async (page?: number) => {
    const authHeader = getAuthHeader();
    const posts = await getPosts(page || 0, authHeader);
    setFeed(posts);
  };

  return (
    <FeedContext.Provider value={{ feed, getFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

export { FeedContext, FeedProvider };
