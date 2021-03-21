import { Route, Switch } from "react-router";

import routes from "./shared/utils/routes";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <Switch>
      <Route path={routes.welcome}>
        <Welcome />
      </Route>
    </Switch>
  );
}

export default App;
