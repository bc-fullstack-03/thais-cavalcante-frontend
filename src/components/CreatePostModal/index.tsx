import { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Text from "../Text";
import { TextInput } from "../TextInput";
import Button from "../Button";
import Heading from "../Heading";
import { Image, TextAlignLeft, X } from "@phosphor-icons/react";
import { FormEvent } from "react";
import { getAuthHeader } from "../../services/auth";
import Dropzone from "../Dropzone";
import { createPost } from "../../services/post";
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
  const [isTextPost, setIsTextPost] = useState<boolean>(false);
  const [isImagePost, setIsImagePost] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const authHeader = getAuthHeader();

  function handleIsTextPost() {
    setIsTextPost(true);
    setIsImagePost(false);
  }

  function handleIsImagePost() {
    setIsImagePost(true);
    setIsTextPost(false);
  }

  async function handleCreatePost(event: FormEvent<PostFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData();
    formData.append("title", form.elements.title.value);
    if (selectedFile) {
      formData.append("file", selectedFile);
      formData.append("description", "");
    } else {
      formData.append("description", form.elements.description.value);
    }

    const post = await createPost(formData, authHeader);
    if (post) {
      setIsModalOpen(false);
    }

    await getFeed();
    setSelectedFile(undefined);
    setIsTextPost(false);
    setIsImagePost(false);
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
          <Text size="md" className="text-gray-light my-2">
            Tipo do post
          </Text>
          <div className="flex justify-between">
            <Button
              type="button"
              className="flex gap-2 items-center px-9"
              onClick={handleIsTextPost}
            >
              <TextAlignLeft size={24} />
              <Text size="sm">Texto</Text>
            </Button>
            <Button
              type="button"
              className="flex gap-2 items-center px-9"
              onClick={handleIsImagePost}
            >
              <Image size={24} />
              <Text size="sm">Imagem</Text>
            </Button>
          </div>
          {isTextPost && (
            <>
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
            </>
          )}
          {isImagePost && (
            <>
              <Text size="md" className="text-gray-light mb-2 mt-3">
                Imagem
              </Text>
              <Dropzone onFileUploaded={setSelectedFile} />
            </>
          )}
          <Button type="submit" className="mt-9">
            Criar post
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default CreatePostModal;
