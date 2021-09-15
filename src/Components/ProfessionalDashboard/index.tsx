import { PButton, PContainer, Title } from "./style";
import { useUser } from "../../Providers/User";

export const ProfessionalDashboard = () => {
  const { user } = useUser();

  return (
    <>
      <Title>Seus Pacientes</Title>
      <PContainer>
        {user?.events?.map((e, i) => (
          <PButton key={i}>{e.title}</PButton>
        ))}
      </PContainer>
    </>
  );
};
