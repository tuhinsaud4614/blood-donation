import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = ({
  type = "button",
  clicked,
  disabled = false,
  blocked,
  children,
}) => {
  return (
    <button
      type={type}
      className={`btn ${classes.Button} ${blocked ? " btn-block" : ""}`}
      onClick={clicked}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.string.isRequired,
  blocked: PropTypes.bool,
};

export default Button;