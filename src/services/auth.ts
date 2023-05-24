import jwtDecode from "jwt-decode";
import { api } from "./config";

export async function authenticate(auth: Auth) {
  try {
    const { data } = await api.post("/security/login", auth);
    const decodedToken = jwtDecode(data.accessToken) as UserToken;
    localStorage.setItem("profile", decodedToken.profile);
    localStorage.setItem("user", decodedToken.user);
    localStorage.setItem("accessToken", data.accessToken);
    return data;
  } catch (err) {
    alert("Erro ao fazer login do usuário.");
  }
}

export function getAuthHeader() {
  const token = localStorage.getItem("accessToken");

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return authHeader;
}

export function logOut() {
  localStorage.clear();
}
