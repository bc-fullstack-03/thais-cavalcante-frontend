interface Auth {
  user: string;
  name?: string;
  password: string;
}

interface UserToken {
  profile: string;
  user: string;
}

interface AuthHeader {
  headers: {
    Authorization: string;
  };
}
