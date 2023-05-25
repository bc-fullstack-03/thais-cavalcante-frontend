import { api } from "./config";

export async function getProfiles(authHeader: AuthHeader) {
  try {
    const { data } = await api.get("/profiles", authHeader);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getProfile(profileId: string, authHeader: AuthHeader) {
  try {
    const { data } = await api.get(`/profiles/${profileId}`, authHeader);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function followProfile(profileId: string, authHeader: AuthHeader) {
  try {
    await api.post(`/profiles/${profileId}/follow`, null, authHeader);
  } catch (err) {
    alert("Erro ao seguir perfil");
  }
}
