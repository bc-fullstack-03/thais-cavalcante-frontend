import { Link } from "react-router-dom";
import Button from "../Button";
import { ParrotIcon } from "../ParrotIcon";
import { TextInput } from "../TextInput";
import { EnvelopeSimple, Lock } from "@phosphor-icons/react";
import { FormEvent } from "react";

interface AuthFormElements extends HTMLFormControlsCollection {
  user: HTMLInputElement;
  password: HTMLInputElement;
}

interface AuthFormElement extends HTMLFormElement {
  readonly elements: AuthFormElements;
}

interface AuthFormProps {
  authFormTitle: string;
  submitFormButtonText: string;
  submitFormButtonAction: (auth: Auth) => void;
  routeName: string;
  authFormFooter: string;
}

function AuthForm({
  authFormTitle,
  submitFormButtonText,
  submitFormButtonAction,
  routeName,
  authFormFooter,
}: AuthFormProps) {
  function handleSubmit(event: FormEvent<AuthFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const auth = {
      user: form.elements.user.value,
      password: form.elements.password.value,
    };

    submitFormButtonAction(auth);
  }
  return (
    <div className="flex flex-col content-center items-center font-inter mt-16">
      <ParrotIcon width={88} height={200} color="#81D8F7" />
      <h1 className="text-white text-[32px] mt-4 mb-2">Sysmap Parrot</h1>
      <h1 className="text-gray-regular text-[18px]">{authFormTitle}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col min-w-login mt-12">
        <label className="text-gray-light mb-2">Endereço de e-mail</label>
        <TextInput.Root>
          <TextInput.Icon>
            <EnvelopeSimple color="#7C7C8A" size={24} />
          </TextInput.Icon>
          <TextInput.Input
            id="user"
            type="text"
            placeholder="Digite seu email"
          ></TextInput.Input>
        </TextInput.Root>
        <label className="text-gray-light mb-2 mt-3">Sua senha</label>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock color="#7C7C8A" size={24} />
          </TextInput.Icon>
          <TextInput.Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
          ></TextInput.Input>
        </TextInput.Root>
        <Button className="mt-9">{submitFormButtonText}</Button>
      </form>
      <Link to={routeName} className="text-gray-regular underline mt-9">
        {authFormFooter}
      </Link>
    </div>
  );
}

export default AuthForm;
