import { ChangeEvent, useState } from "react";
import Button from "../Button";
import Heading from "../Heading";
import { TextInput } from "../TextInput";
import { useParams } from "react-router-dom";
import { getAuthHeader } from "../../services/auth";
import { createCommentToPost } from "../../services/post";

interface CreateCommentProps {
  onCommentCreated: () => void;
}

function CreateComment({ onCommentCreated }: CreateCommentProps) {
  const { id } = useParams();
  const authHeader = getAuthHeader();
  const [commentDescription, setCommentDescription] = useState<string>("");

  function handleCommentDescriptionChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setCommentDescription(event.target.value);
  }

  async function handleCreateComment() {
    if (typeof id == "string") {
      await createCommentToPost(id, commentDescription, authHeader);
      onCommentCreated();
    }
  }

  return (
    <div className="px-5 mt-4 w-full md:w-3/4">
      <Heading className="mb-5">Adicionar comentário</Heading>
      <TextInput.Root>
        <TextInput.Input
          id="description"
          type="text"
          placeholder="Digite o conteúdo do comentário"
          onChange={handleCommentDescriptionChange}
        />
      </TextInput.Root>
      <div className="text-end">
        <Button onClick={handleCreateComment} className="w-1/3 mt-5">
          Adicionar
        </Button>
      </div>
    </div>
  );
}

export default CreateComment;
