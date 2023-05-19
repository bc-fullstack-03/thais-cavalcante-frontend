import { api } from "./config";

export async function getPosts(authHeader: AuthHeader) {
  try {
    const { data } = await api.get("/feed", authHeader);
    return data;
  } catch (err) {
    alert("Erro ao obter Feed.");
  }
}
