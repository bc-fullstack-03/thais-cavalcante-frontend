import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { authenticate } from "../../service/auth";

function Login() {
  const navigate = useNavigate();
  async function handleLogin(auth: Auth) {
    const loggedInUser = await authenticate(auth);

    if (loggedInUser) {
      navigate("/home");
    }
  }

  return (
    <AuthForm
      authFormTitle="Faça o login e comece a usar!"
      submitFormButtonText="Entrar"
      submitFormButtonAction={handleLogin}
      routeName="/register"
      authFormFooter="Não possui conta? Crie uma agora"
    />
  );
}

export default Login;
