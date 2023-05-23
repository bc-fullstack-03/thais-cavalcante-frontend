import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Text from "../Text";
import { Image } from "@phosphor-icons/react";

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

function Dropzone({ onFileUploaded }: DropzoneProps) {
  const [selectedFileURL, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      const file = acceptedFiles[0];

      const fileURL = URL.createObjectURL(file);

      setSelectedFileUrl(fileURL);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      {selectedFileURL ? (
        <img src={selectedFileURL} className="max-h-96 rounded-lg" />
      ) : (
        <div className="bg-gray-dark rounded w-full px-3 h-12 flex gap-2 items-center cursor-pointer">
          <Image size={24} weight="fill" className="text-gray-regular" />
          <Text size="sm" className="text-gray-regular font-normal">
            Selecione um arquivo de imagem
          </Text>
        </div>
      )}
    </div>
  );
}

export default Dropzone;
