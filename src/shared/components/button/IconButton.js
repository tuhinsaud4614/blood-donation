import PropTypes from "prop-types";

import classes from "./Button.module.css";

const IconButton = ({ type = "button", clicked, disabled = false, children }) => {
  return (
    <button
      type={type}
      className={`btn ${classes.IconButton}`}
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
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.element.isRequired,
};

export default IconButton;
