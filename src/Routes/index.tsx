import { Switch, Route } from "react-router-dom";
import ChoosePage from "../Pages/ChoosePage";
import Home from "../Pages/Home";
import PageRegister from "../Pages/PageRegister";
import LoginPage from "../Pages/Login";

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
        <PageRegister profissional/>
      </Route>

      <Route path = "/ChoosePage">
        <ChoosePage/>
      </Route>

      <Route path = "/login">
        <LoginPage/>
      </Route>

      
    </Switch>
  );
};

export default Router;
