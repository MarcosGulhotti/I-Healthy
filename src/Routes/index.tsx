import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import PageRegister from "../Pages/PageRegister";

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
    </Switch>
  );
};

export default Router;
