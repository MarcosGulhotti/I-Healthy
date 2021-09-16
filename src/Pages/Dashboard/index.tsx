import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { Menu } from "../../Components/Menu";
import { MenuDesktop } from "../../Components/MenuDesktop";
import { PatientDashboard } from "../../Components/PatientDashboard";
import { ProfessionalDashboard } from "../../Components/ProfessionalDashboard";
import UserHeader from "../../Components/UserHeader";
import { useAuth } from "../../Providers/Auth";
import { useUser } from "../../Providers/User";
import { Container } from "./style";

export const Dashboard = () => {
  const { user } = useUser();
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
        <UserHeader />
        {user?.isProfessional && <ProfessionalDashboard />}
        {!user?.isProfessional && <PatientDashboard />}
        <Menu />
      </Container>
    </motion.div>
  );
};
