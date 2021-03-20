import PropTypes from "prop-types";

import classes from "./Button.module.css";

const IconButton = ({
  type = "button",
  clicked,
  disabled = false,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      className={`btn ${classes.IconButton} ${className}`}
      onClick={clicked}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  clicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.element.isRequired,
};

export default IconButton;
