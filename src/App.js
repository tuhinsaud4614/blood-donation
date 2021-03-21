import { Route, Switch } from "react-router";

import routes from "./shared/utils/routes";
import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/sign-in/SignIn";

function App() {
  return (
    <Switch>
      <Route path={routes.welcome} exact>
        <Welcome />
      </Route>
      <Route path={routes.signIn}>
        <SignIn />
      </Route>
    </Switch>
  );
}

export default App;
