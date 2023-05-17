import { getAuthHeader } from "./auth";
import { api } from "./config";

const authHeader = getAuthHeader();

export async function createUser(auth: Auth) {
  try {
    const { data } = await api.post("/security/register", auth);
    return data;
  } catch (err) {
    alert("Erro na criação do usuário.");
  }
}
