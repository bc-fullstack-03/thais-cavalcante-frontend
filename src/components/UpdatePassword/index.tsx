import { useState, ChangeEvent } from "react";
import { Lock } from "@phosphor-icons/react";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";
import { TextInput } from "../TextInput";
import { getAuthHeader } from "../../services/auth";
import { updateUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {
  const authHeader = getAuthHeader();
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatedNewPassword, setRepeatedNewPassword] = useState<string>("");
  const loggedInUser = localStorage.getItem("user") as string;
  const navigate = useNavigate();

  function handleNewPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setNewPassword(event.target.value);
  }

  function handleRepeatedNewPasswordChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setRepeatedNewPassword(event.target.value);
  }

  const auth = {
    user: loggedInUser,
    password: newPassword,
  };

  async function handleUpdatePassword(event: React.FormEvent) {
    event.preventDefault();
    if (newPassword != repeatedNewPassword) {
      alert("Senhas são incompatíveis");
    } else {
      const userUpdated = await updateUser(auth, authHeader);
      if (userUpdated) {
        alert("Senha alterada com sucesso, faça o login novamente");
        navigate("/");
      }
    }
  }

  return (
    <div className="px-5 mt-4 w-full md:w-3/4">
      <Heading className="mb-5">Atualizar Senha</Heading>
      <form className="flex flex-col w-full" onSubmit={handleUpdatePassword}>
        <Text size="md" className="text-gray-light mb-2">
          Sua Nova Senha
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock color="#7C7C8A" size={24} />
          </TextInput.Icon>
          <TextInput.Input
            type="password"
            placeholder="Digite sua nova senha"
            onChange={handleNewPasswordChange}
          ></TextInput.Input>
        </TextInput.Root>
        <Text size="md" className="text-gray-light mb-2 mt-3">
          Repita sua nova Senha
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock color="#7C7C8A" size={24} />
          </TextInput.Icon>
          <TextInput.Input
            type="password"
            placeholder="Digite sua nova senha"
            autoComplete="off"
            onChange={handleRepeatedNewPasswordChange}
          ></TextInput.Input>
        </TextInput.Root>
        <div className="text-end">
          <Button className="w-1/3 mt-5">Adicionar</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePassword;
