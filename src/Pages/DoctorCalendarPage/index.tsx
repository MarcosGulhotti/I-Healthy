import { useHistory } from "react-router";
import { DocCalendar } from "../../Components/DoctorCalendar";
import { useAuth } from "../../Providers/Auth";

const DoctorCalendar = () => {
  const { isAuth } = useAuth()
  const history = useHistory()

  if (isAuth === 'null') {
    history.push('/login')
  }
  return (
    <>
      <DocCalendar />
    </>
  );
};
export default DoctorCalendar;
