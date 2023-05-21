import { api } from "./config";

export async function getPosts(authHeader: AuthHeader) {
  try {
    const { data } = await api.get("/feed", authHeader);
    return data;
  } catch (err) {
    alert("Erro ao obter Feed.");
  }
}

export async function createPost(post: FormData, authHeader: AuthHeader) {
  try {
    const { data } = await api.post("/posts", post, authHeader);
    return data;
  } catch (err) {
    alert("Erro ao tentar criar post");
  }
}

export async function getPost(id: string, authHeader: AuthHeader) {
  try {
    const { data } = await api.get(`/posts/${id}`, authHeader);
    return data;
  } catch (err) {
    alert("Erro ao obter Feed.");
  }
}
