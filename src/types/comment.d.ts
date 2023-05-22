interface Comment {
  _id: string;
  description: string;
  profile: {
    name: string;
  };
  likes: string[];
  post: string;
}
