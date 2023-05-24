import { Wind } from "@phosphor-icons/react";
import Heading from "../Heading";

interface EmptyStateProps {
  message: string;
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <Wind size={192} weight="regular" className="text-gray-light" />
      <Heading>{message}</Heading>
    </div>
  );
}

export default EmptyState;
