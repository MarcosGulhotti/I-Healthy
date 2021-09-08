import { Background } from "../../Components/Background"
import { Container } from "./styles"
import img from "./../../Assets/Images/ChoosePage.svg"
import { Button } from "../../Components/Button"

const ChoosePage = () => {
  return (
  <Background image = {img} >
    <Container>
      <h1>Aplicação</h1>
      <p>Você deseja se registrar como um paciente ou como um profissional de saúde,
         selecione abaixo.</p>
      <div>
        <Button> Paciente </Button>
        <p>Ou</p>
        <Button GreenTheme> Profissional </Button>
      </div>
    </Container>
  </Background>
)
}

export default ChoosePage