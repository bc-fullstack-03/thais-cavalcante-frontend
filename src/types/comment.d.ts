interface Comment {
  _id: string;
  description: string;
  profile: {
    _id: string;
    name: string;
  };
  likes: string[];
  post: string;
}
