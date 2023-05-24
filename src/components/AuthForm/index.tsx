import { Link } from "react-router-dom";
import Button from "../Button";
import { ParrotIcon } from "../ParrotIcon";
import { TextInput } from "../TextInput";
import {
  EnvelopeSimple,
  IdentificationCard,
  Lock,
} from "@phosphor-icons/react";
import { FormEvent } from "react";
import Heading from "../Heading";
import Text from "../Text";

interface AuthFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
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
  isRegister?: boolean;
}

function AuthForm({
  authFormTitle,
  submitFormButtonText,
  submitFormButtonAction,
  routeName,
  authFormFooter,
  isRegister,
}: AuthFormProps) {
  function handleSubmit(event: FormEvent<AuthFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    let auth: Auth;

    isRegister
      ? (auth = {
          name: form.elements.name.value,
          user: form.elements.user.value,
          password: form.elements.password.value,
        })
      : (auth = {
          user: form.elements.user.value,
          password: form.elements.password.value,
        });

    submitFormButtonAction(auth);
  }
  return (
    <div className="flex flex-col content-center items-center font-inter mt-16">
      <ParrotIcon width={80} height={182} color="#81D8F7" />
      <Heading size="lg" className="mt-4 mb-2">
        Sysmap Parrot
      </Heading>
      <Text size="md" className="text-gray-regular">
        {authFormTitle}
      </Text>
      <form onSubmit={handleSubmit} className="flex flex-col min-w-login mt-12">
        {isRegister && (
          <div className="mb-3">
            <Text size="md" className="text-gray-light mb-2">
              Seu nome
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <IdentificationCard color="#7C7C8A" size={24} />
              </TextInput.Icon>
              <TextInput.Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
              ></TextInput.Input>
            </TextInput.Root>
          </div>
        )}
        <Text size="md" className="text-gray-light mb-2">
          Endereço de e-mail
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <EnvelopeSimple color="#7C7C8A" size={24} />
          </TextInput.Icon>
          <TextInput.Input
            id="user"
            type="text"
            placeholder="Digite seu e-mail"
          ></TextInput.Input>
        </TextInput.Root>
        <Text size="md" className="text-gray-light mb-2 mt-3">
          Sua senha
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock color="#7C7C8A" size={24} />
          </TextInput.Icon>
          <TextInput.Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="off"
          ></TextInput.Input>
        </TextInput.Root>
        <Button className="mt-9">{submitFormButtonText}</Button>
      </form>
      <Link to={routeName} className="text-gray-regular underline mt-9">
        <Text size="sm">{authFormFooter}</Text>
      </Link>
    </div>
  );
}

export default AuthForm;
