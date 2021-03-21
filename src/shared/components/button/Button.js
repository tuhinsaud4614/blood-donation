import PropTypes from "prop-types";

import classes from "./Button.module.css";

const Button = ({
  type = "button",
  clicked,
  disabled = false,
  blocked,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      className={`btn ${classes.Button} ${
        blocked ? " btn-block" : ""
      } ${className}`}
      onClick={clicked}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  clicked: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.string.isRequired,
  blocked: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
