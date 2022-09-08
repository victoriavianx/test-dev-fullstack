import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import RegisterProduct from "../pages/Register/register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/anunciar"}>
        <RegisterProduct />
      </Route>
    </Switch>
  );
};

export default Routes;
