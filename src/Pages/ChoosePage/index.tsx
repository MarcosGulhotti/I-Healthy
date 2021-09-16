import { Background } from "../../Components/Background";
import { Color, Container } from "./styles";
import img from "./../../Assets/Images/ChoosePage.svg";
import { Button } from "../../Components/Button";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/Auth";
import { motion } from "framer-motion";

const ChoosePage = () => {
  const history = useHistory();
  const { isAuth } = useAuth();

  if (isAuth !== "null") {
    history.push("/login");
  }

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    >
      <Background image={img}>
        <Container>
          <h1>IHealthy</h1>
          <p>
            Você deseja se registrar como um <Color>paciente</Color> ou como um{" "}
            <Color>profissional de saúde</Color>, selecione abaixo.
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
    </motion.div>
  );
};

export default ChoosePage;
