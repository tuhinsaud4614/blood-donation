import classes from "./Logo.module.css";
import logo from "../../../assets/img/blood-logo.svg";

const Logo = () => {
  return (
    <div className={`${classes.Logo}`}>
      <img src={logo} alt="Logo" />
      <p>
        <span>Blood</span> <span>Donation</span>
      </p>
    </div>
  );
};

export default Logo;
