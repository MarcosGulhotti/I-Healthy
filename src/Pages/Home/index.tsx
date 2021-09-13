import LandingPage from "./../../Assets/Images/LandingPage.svg";
import { Container } from "./styles";
import { Button } from "../../Components/Button";
import { Background } from "../../Components/Background";
import { useHistory } from "react-router-dom";
import { UserCalendar } from "../../Components/UserCalendar";

const Home = () => {
  const history = useHistory();
  return <UserCalendar />;
};
export default Home;
