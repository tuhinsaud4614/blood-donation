import { Route, Switch, Redirect } from "react-router";

import routes from "./shared/utils/routes";
import classes from "./App.module.css";
import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Notifications from "./pages/notifications/Notifications";
import Sidebar from "./shared/components/navigation/sidebar/Sidebar";
import Profile from "./pages/profile/Profile";
import Request from "./pages/Requests/Request";
import Donations from "./pages/donations/Donations";
import Home from "./pages/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { autoSignIn } from "./store/auth/actions";
import { useEffect } from "react";

const RouteContainer = ({ children }) => {
  return (
    <div className={`${classes.ContainerFluid}`}>
      <div className={`${classes.RouteContainer}`}>
        <Sidebar />
        <main className={`${classes.Pages}`}>{children}</main>
      </div>
    </div>
  );
};

function App() {
  const { user } = useSelector((state) => state.auth);
  const rdxDispatch = useDispatch();

  useEffect(() => {
    rdxDispatch(autoSignIn());
  }, [rdxDispatch]);
  const routesPath = user.email ? (
    <>
      <Switch>
        <Route path={routes.notifications} exact>
          <RouteContainer>
            <Notifications />
          </RouteContainer>
        </Route>
        <Route path={routes.profile} exact>
          <RouteContainer>
            <Profile />
          </RouteContainer>
        </Route>
        <Route path={routes.request} exact>
          <RouteContainer>
            <Request />
          </RouteContainer>
        </Route>
        <Route path={routes.donations} exact>
          <RouteContainer>
            <Donations />
          </RouteContainer>
        </Route>
        <Route path={routes.home} exact>
          <RouteContainer>
            <Home />
          </RouteContainer>
        </Route>
        <Route path={routes.welcome} exact>
          <Welcome />
        </Route>
        <Redirect to={routes.home} />
      </Switch>
    </>
  ) : (
    <>
      <Switch>
        <Route path={routes.welcome} exact>
          <Welcome />
        </Route>
        <Route path={routes.signIn} exact>
          <SignIn />
        </Route>
        <Route path={routes.signUp} exact>
          <SignUp />
        </Route>
        <Redirect to={routes.signIn} />
      </Switch>
    </>
  );

  return routesPath;
}

export default App;
