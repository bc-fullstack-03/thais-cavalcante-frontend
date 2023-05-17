interface User {
  user: email;
  profile: {
    name: string;
    user: string;
    following: Array;
    followers: Array;
  };
}
