interface Post {
  _id: string;
  title: string;
  description: string;
  profile: {
    name: string;
  };
  comments: Comment[];
  likes: string[];
  image: boolean;
}
