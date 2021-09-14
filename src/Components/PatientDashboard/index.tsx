import { PButton, PContainer, Title } from "./style";
import { useUser } from "../../Providers/User";

export const PatientDashboard = () => {
  const { user } = useUser();

  const reserveDate = (date: string) => {
    const newDate = date.split("-").reverse().join("/");
    return newDate;
  };
  return (
    <>
      <Title>Suas Consultas</Title>
      <PContainer>
        {user.events?.length === 0 && <h2>Você não tem nenhuma consulta</h2>}
        {user.events?.map((e) => (
          <PButton>
            <p>{e.title}</p>
            {reserveDate(e.date)}
          </PButton>
        ))}
      </PContainer>
    </>
  );
};
