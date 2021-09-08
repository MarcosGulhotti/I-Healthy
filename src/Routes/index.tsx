import { Switch, Route } from "react-router-dom";
import ChoosePage from "../Pages/ChoosePage";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path = "/ChoosePage">
        <ChoosePage/>
      </Route>
    </Switch>
  );
};

export default Router;
