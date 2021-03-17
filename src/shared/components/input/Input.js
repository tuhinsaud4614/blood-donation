import PropTypes from "prop-types";

import classes from "./Input.module.css";

const Input = ({
  id,
  name,
  type = "text",
  changed,
  value,
  placeholder,
  required = false,
  icon,
}) => {
  return (
    <div className={`${classes.InputContainer} shadow`}>
      <input
        id={id}
        name={name}
        type=""
        className={`form-control ${classes.Input}`}
        value={value}
        placeholder={placeholder}
        onChange={changed}
        required={required}
      />

      <span className={classes.Icon}>{icon}</span>
    </div>
  );
};

Input.propTypes = {
  changed: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["number", "password", "text", "email", "search"]),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  icon: PropTypes.element,
  required: PropTypes.bool,
};

export default Input;
