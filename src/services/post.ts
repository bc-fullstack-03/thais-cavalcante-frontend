import { api } from "./config";

export async function getPosts(page: number, authHeader: AuthHeader) {
  try {
    const { data } = await api.get(`/feed?page=${page}`, authHeader);
    return data;
  } catch (err) {
    alert("Erro ao obter Feed.");
  }
}

export async function getPost(id: string, authHeader: AuthHeader) {
  try {
    const { data } = await api.get(`/posts/${id}`, authHeader);
    return data;
  } catch (err) {
    alert("Erro ao obter Post.");
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

export async function updatePost(
  id: string,
  post: FormData,
  authHeader: AuthHeader
) {
  try {
    const { data } = await api.put(`/posts/${id}`, post, authHeader);
    return data;
  } catch (err) {
    alert("Erro ao tentar atualizar post");
  }
}

export async function deletePost(id: string, authHeader: AuthHeader) {
  try {
    await api.delete(`/posts/${id}`, authHeader);
  } catch (err) {
    alert("Erro ao deletar post");
  }
}

export async function createCommentToPost(
  postId: string,
  commentDescription: string,
  authHeader: AuthHeader
) {
  try {
    const { data } = await api.post(
      `/posts/${postId}/comments`,
      {
        description: commentDescription,
      },
      authHeader
    );
    return data;
  } catch (err) {
    alert("Erro ao tentar criar comentário");
  }
}

export async function deleteComment(
  postId: string,
  commentId: string,
  authHeader: AuthHeader
) {
  try {
    await api.delete(`/posts/${postId}/comments/${commentId}`, authHeader);
  } catch (err) {
    alert("Erro ao deletar comentário");
  }
}

export async function likePost(postId: string, authHeader: AuthHeader) {
  try {
    await api.post(`/posts/${postId}/like`, null, authHeader);
  } catch (err) {
    alert("Erro ao curtir post");
  }
}

export async function unlikePost(postId: string, authHeader: AuthHeader) {
  try {
    await api.post(`/posts/${postId}/unlike`, null, authHeader);
  } catch (err) {
    alert("Erro ao remover curtida do post");
  }
}

export async function likePostComment(
  postId: string,
  commentId: string,
  authHeader: AuthHeader
) {
  try {
    await api.post(
      `/posts/${postId}/comments/${commentId}/like`,
      null,
      authHeader
    );
  } catch (err) {
    alert("Erro ao curtir comentário");
  }
}

export async function unlikePostComment(
  postId: string,
  commentId: string,
  authHeader: AuthHeader
) {
  try {
    await api.post(
      `/posts/${postId}/comments/${commentId}/unlike`,
      null,
      authHeader
    );
  } catch (err) {
    alert("Erro ao remover curtida do comentário");
  }
}
