import { PButton, PContainer, Title } from "./style";
import { useUser } from "../../Providers/User";

export const ProfessionalDashboard = () => {
  const { user } = useUser();

  return (
    <>
      <Title>Seus Pacientes</Title>
      <PContainer>
        {user.events?.length === 0 && <h2>Você não tem nenhuma consulta</h2>}
        {user.events?.map((e) => (
          <PButton>{e.title}</PButton>
        ))}
      </PContainer>
    </>
  );
};
