interface Post {
  title: string;
  description: string;
  profile: {
    name: string;
  };
  comments: Array;
  likes: Array;
  image: boolean;
}
