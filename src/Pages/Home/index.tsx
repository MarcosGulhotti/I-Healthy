import LandingPage from "./../../Assets/Images/LandingPage.svg";
import { Container } from "./styles";
import { Button } from "../../Components/Button";
import { Background } from "../../Components/Background";
import { useHistory } from "react-router-dom";
import { Calendar } from "../../Components/Calendar";

const Home = () => {
  const history = useHistory();
  return <Calendar />;
};
export default Home;
