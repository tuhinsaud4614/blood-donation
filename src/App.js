import { Route, Switch } from "react-router";

import routes from "./shared/utils/routes";
import classes from "./App.module.css";
import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Notifications from "./pages/notifications/Notifications";
import Sidebar from "./shared/components/navigation/sidebar/Sidebar";
import Profile from "./pages/profile/Profile";
import Request from "./pages/Requests/Request";

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
  return (
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
    </Switch>
  );
}

export default App;
