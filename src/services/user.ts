import { api } from "./config";

export async function createUser(auth: Auth) {
  try {
    const { data } = await api.post("/security/register", auth);
    return data;
  } catch (err) {
    alert("Erro na criação do usuário.");
  }
}

export async function updateUser(auth: Auth, authHeader: AuthHeader) {
  try {
    const { data } = await api.put("/users/me", auth, authHeader);
    return data;
  } catch (err) {
    alert("Erro na atualização do usuário.");
  }
}
