import { api } from "./config";

export async function getProfiles(authHeader: AuthHeader) {
  try {
    const { data } = await api.get("/profiles", authHeader);
    return data;
  } catch (err) {
    alert("Erro ao obter os perfis.");
  }
}
