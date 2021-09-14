import { Menu } from "../../Components/Menu";
import { PatientDashboard } from "../../Components/PatientDashboard";
import { ProfessionalDashboard } from "../../Components/ProfessionalDashboard";
import UserHeader from "../../Components/UserHeader";
import { useUser } from "../../Providers/User";
import { Container } from "./style";

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <Container>
      <UserHeader />
      {user.isProfessional && <ProfessionalDashboard />}
      {!user.isProfessional && <PatientDashboard />}
      <Menu />
    </Container>
  );
};
