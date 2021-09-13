import LandingPage from "./../../Assets/Images/LandingPage.svg";
import { Container } from "./styles";
import { Button } from "../../Components/Button";
import { Background } from "../../Components/Background";
import { useHistory } from "react-router-dom";
import { UserCalendar } from "../../Components/UserCalendar";

const Home = () => {
  const history = useHistory();

  return (
    <Background image={LandingPage}>
      <Container>
        <h1>Aplicação</h1>
        <p>
          Bem vindo ao [aplicação], a sua plataforma de saúde, aqui você busca
          profissionais, marca consultas e realiza atendimentos. Para continuar,
          selecione abaixo.
        </p>
        <div>
          <Button onClick={() => history.push("/login")}>Entrar</Button>
          <p>Ou</p>
          <Button onClick={() => history.push("/choosePage")} GreenTheme>
            Registrar
          </Button>
        </div>
      </Container>
    </Background>
  );
};
export default Home;
