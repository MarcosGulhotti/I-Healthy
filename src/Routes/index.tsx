import { Switch, Route } from "react-router-dom";
import ChoosePage from "../Pages/ChoosePage";
import Home from "../Pages/Home";
import PageRegister from "../Pages/PageRegister";
import LoginPage from "../Pages/Login";
import PatientCalendar from "../Pages/PatientCalendar";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/patient">
        <PageRegister />
      </Route>

      <Route exact path="/professional">
        <PageRegister profissional />
      </Route>

      <Route path="/choosePage">
        <ChoosePage />
      </Route>

      <Route path = "/login">
        <LoginPage/>
      </Route>

      <Route path = "/calendar">
        <PatientCalendar/>
      </Route>

      
    </Switch>
  );
};

export default Router;
