import { PButton, PContainer, Title } from "./style";
import { useUser } from "../../Providers/User";

export const PatientDashboard = () => {
  const { user } = useUser();

  return (
    <>
      <Title>Suas Consultas</Title>
      <PContainer>
        {user.events?.map((e) => (
          <PButton>{e.date}</PButton>
        ))}
      </PContainer>
    </>
  );
};
