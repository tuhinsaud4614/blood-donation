import { Route, Switch } from "react-router";

import routes from "./shared/utils/routes";
import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";

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
    </Switch>
  );
}

export default App;
