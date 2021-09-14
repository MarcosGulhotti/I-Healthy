import { useHistory } from "react-router";
import { DocCalendar } from "../../Components/DoctorCalendar";
import DoctorHeader from "../../Components/DoctorHeader";
import { useAuth } from "../../Providers/Auth";
import { BoxCalendar, Container } from "./style";

const DoctorCalendar = () => {
  const { isAuth } = useAuth();
  const history = useHistory();

  const doctor: any = history.location.state;

  if (isAuth === "null") {
    history.push("/login");
  }
  return (
    <>
      <Container>
        <DoctorHeader DocId={doctor.id} />
        <h1>Agenda de {doctor.username.split(" ")[0]}</h1>
        <BoxCalendar>
          <DocCalendar />
        </BoxCalendar>
      </Container>
    </>
  );
};
export default DoctorCalendar;
