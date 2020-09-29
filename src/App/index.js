import React, { useEffect, useState, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

import "../../node_modules/font-awesome/scss/font-awesome.scss";

import Loader from "./layout/Loader";
import Aux from "../hoc/_Aux";
import ScrollToTop from "./layout/ScrollToTop";
import routes from "../route";
import { Auth } from "../service";
import ShopDashboard from "../shop/Dashboard";

const AdminLayout = Loadable({
  loader: () => import("./layout/AdminLayout"),
  loading: Loader,
});

// const signIn = Loadable({
//   loader: () => import("../Demo/Authentication/SignIn/SignIn1"),
//   loading: Loader,
// });
const data = {
  token: undefined,
  user: undefined,
};
function App() {
  const [userData, setUserData] = useState({ ...data });
  useEffect(() => {
    const checkLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const isValid = await Auth.tokenIsValied({
        "x-auth-token": token,
      });
      console.log(isValid);
      if (isValid) {
        const userRes = await Auth.getUser({ "x-auth-token": token }).then(
          (response) => {
            setUserData({
              token,
              user: response.data,
            });
          }
        );
      }
    };

    checkLogin();
  }, []);
  const menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });
  return (
    <Aux>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Switch>
            {menu}
            <Route path="/" component={AdminLayout} />
            <Route exact path="/shopDashboard" component={ShopDashboard} />
            {/* <Route exact path="/signin" component={signIn} />
            <Redirect to="/signin" /> */}
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Aux>
  );
}

export default App;
