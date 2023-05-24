import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { createUser } from "../../services/user";
import { authenticate } from "../../services/auth";

function Register() {
  const navigate = useNavigate();

  async function handleRegister(auth: Auth) {
    const user = await createUser(auth);

    if (user) {
      const loggedInuser = await authenticate(auth);

      if (loggedInuser) {
        navigate("/home");
      }
    }
  }

  return (
    <AuthForm
      authFormTitle="Cadastre-se e comece a usar!"
      submitFormButtonText="Cadastrar"
      submitFormButtonAction={handleRegister}
      routeName="/"
      authFormFooter="Já possui conta? Faça login!
  "
      isRegister
    />
  );
}

export default Register;
