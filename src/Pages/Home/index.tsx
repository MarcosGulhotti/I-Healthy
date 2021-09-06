import LandingPage from "./../../Assets/Images/LandingPage.svg"
import { Container } from "./styles";
import { Button } from "../../Components/Button";
import { Background } from "../../Components/Background";


const Home = () => {
  return (
    <>
    <Container>
    <h1>Aplicação</h1>
    <p>Bem vindo ao [aplicação], a sua plataforma de saúde, aqui você busca profissionais, marca consultas e realiza atendimentos.
      Para continuar, selecione abaixo.</p>
    <div>
      <Button>Logar</Button>
      <p>Ou</p>
      <Button GreenTheme> Registrar </Button>
    </div>
  </Container>
  <Background image = {LandingPage}/>
  </>
  );
};
export default Home;
