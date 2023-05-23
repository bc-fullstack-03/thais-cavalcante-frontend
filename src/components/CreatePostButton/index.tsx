import * as Dialog from "@radix-ui/react-dialog";

function CreatePostButton() {
  return (
    <Dialog.Trigger className="px-5 ml-24 md:px-0 md:ml-0 bg-cyan-regular h-10 font-inter text-md font-semibold transition-colors hover:bg-cyan-light rounded">
      Novo post
    </Dialog.Trigger>
  );
}

export default CreatePostButton;
