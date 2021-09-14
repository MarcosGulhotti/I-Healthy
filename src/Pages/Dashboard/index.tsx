import { useHistory } from "react-router";
import { Menu } from "../../Components/Menu";
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
    <Container>
      <UserHeader />
      {user.isProfessional && <ProfessionalDashboard />}
      {!user.isProfessional && <PatientDashboard />}
      <Menu />
    </Container>
  );
};
