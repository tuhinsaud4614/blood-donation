import PropTypes from "prop-types";

import classes from "./Logo.module.css";
import logo from "../../../assets/img/blood-logo.svg";

const Logo = ({ customClass }) => {
  return (
    <div className={`${classes.Logo} ${customClass}`}>
      <img src={logo} alt="Logo" />
      <p>
        <span>Blood</span> <span>Donation</span>
      </p>
    </div>
  );
};

Logo.propTypes = {
  customClass: PropTypes.string,
};

export default Logo;
