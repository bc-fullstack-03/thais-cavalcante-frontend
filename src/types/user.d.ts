interface User {
  user: string;
  password: string;
  profile: {
    name: string;
    user: string;
    following: Array;
    followers: Array;
  };
}
