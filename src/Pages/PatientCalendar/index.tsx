import { UserCalendar } from "../../Components/UserCalendar";
import { BoxCalendar, Container } from "./style";
import { Menu } from "../../Components/Menu";
import Header from "../../Components/UserHeader";
import { useAuth } from "../../Providers/Auth";
import { useHistory } from "react-router";
import { MenuDesktop } from "../../Components/MenuDesktop";
import { motion } from "framer-motion";

const PatientCalendar = () => {
  const { isAuth } = useAuth();
  const history = useHistory();

  if (isAuth === "null") {
    history.push("/login");
  }
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 1}}
>
      <Container>
        <MenuDesktop />
        <Header />

        <h1>Agenda de consultas</h1>
        <BoxCalendar>
          <UserCalendar />
        </BoxCalendar>

        <Menu />
      </Container>
  </motion.div>
  );
};

export default PatientCalendar;
