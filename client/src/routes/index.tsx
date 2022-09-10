import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import RegisterProduct from "../pages/Register/register";
import UpdateProduct from "../pages/Update/updateProduct";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/anunciar"}>
        <RegisterProduct />
      </Route>
      <Route exact path={"/editar/:productId"}>
        <UpdateProduct />
      </Route>
    </Switch>
  );
};

export default Routes;
