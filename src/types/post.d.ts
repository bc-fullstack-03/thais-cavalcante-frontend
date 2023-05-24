interface Post {
  _id: string;
  title: string;
  description: string;
  profile: {
    _id: string;
    name: string;
  };
  comments: Comment[];
  likes: string[];
  image: boolean;
}
