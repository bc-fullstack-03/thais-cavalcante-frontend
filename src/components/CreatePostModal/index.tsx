import { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Text from "../Text";
import { TextInput } from "../TextInput";
import Button from "../Button";
import Heading from "../Heading";
import { X } from "@phosphor-icons/react";
import { FormEvent } from "react";
import { getAuthHeader } from "../../service/mainAPI/auth";
import Dropzone from "../Dropzone";
import { createPost } from "../../service/mainAPI/post";
import { FeedContext } from "../../contexts/FeedContext";

interface CreatePostModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PostFormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
}

interface PostFormElement extends HTMLFormElement {
  readonly elements: PostFormElements;
}

function CreatePostModal({ setIsModalOpen }: CreatePostModalProps) {
  const { getFeed } = useContext(FeedContext);
  const [selectedFile, setSelectedFile] = useState<File>();
  const authHeader = getAuthHeader();

  async function handleCreatePost(event: FormEvent<PostFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData();
    formData.append("title", form.elements.title.value);
    formData.append("description", form.elements.description.value);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    const post = await createPost(formData, authHeader);
    if (post) {
      setIsModalOpen(false);
    }

    await getFeed();
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-gray-dark/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-black pb-8 px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-96 shadow-lg shadow-black/25">
        <div className="flex justify-between">
          <Heading className="mt-8">Novo Post</Heading>
          <Dialog.Close>
            <X size={24} className="text-gray-light text-right" />
          </Dialog.Close>
        </div>
        <form onSubmit={handleCreatePost} className="flex flex-col mt-5">
          <Text size="md" className="text-gray-light mb-2">
            Título do post
          </Text>
          <TextInput.Root>
            <TextInput.Input
              id="title"
              type="text"
              placeholder="Digite o título do post"
            ></TextInput.Input>
          </TextInput.Root>
          <Text size="md" className="text-gray-light mb-2 mt-3">
            Descrição
          </Text>
          <TextInput.Root>
            <TextInput.Input
              id="description"
              type="text"
              placeholder="Digite o conteúdo do post"
            ></TextInput.Input>
          </TextInput.Root>
          <Text size="md" className="text-gray-light mb-2 mt-3">
            Imagem
          </Text>
          <Dropzone onFileUploaded={setSelectedFile} />
          <Button className="mt-9">Criar post</Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default CreatePostModal;
