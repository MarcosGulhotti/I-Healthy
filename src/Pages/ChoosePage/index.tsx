import { Background } from "../../Components/Background";
import { Container } from "./styles";
import img from "./../../Assets/Images/ChoosePage.svg";
import { Button } from "../../Components/Button";
import { useHistory } from "react-router-dom";

const ChoosePage = () => {
  const history = useHistory();
  return (
    <Background image={img}>
      <Container>
        <h1>Aplicação</h1>
        <p>
          Você deseja se registrar como um paciente ou como um profissional de
          saúde, selecione abaixo.
        </p>
        <div>
          <Button onClick={() => history.push("/patient")}> Paciente </Button>
          <p>Ou</p>
          <Button GreenTheme onClick={() => history.push("/professional")}>
            Profissional
          </Button>
        </div>
      </Container>
    </Background>
  );
};

export default ChoosePage;
