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
        {user?.events?.map((e, i) => (
          <PButton key={i}>
            <p>{e.title}</p>
            {reserveDate(e.date)}
          </PButton>
        ))}
      </PContainer>
    </>
  );
};
