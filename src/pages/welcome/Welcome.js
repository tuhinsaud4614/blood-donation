import { useHistory } from "react-router";

import routes from "../../shared/utils/routes";
import Button from "../../shared/components/button/Button";
import Logo from "../../shared/components/logo/Logo";
import classes from "./Welcome.module.css";

const Welcome = () => {
  const { replace } = useHistory();
  return (
    <div className={`${classes.Welcome}`}>
      <Logo customClass={`${classes.Logo}`} />
      <Button
        className={`${classes.Button}`}
        clicked={() => {
          replace(routes.request);
        }}
      >
        Start Journey
      </Button>
    </div>
  );
};

export default Welcome;
