import PropTypes from "prop-types";

import classes from "./CheckButton.module.css";

const CheckButton = ({ id, name, changed, children }) => {
  return (
    <label className={`${classes.CheckButton}`}>
      <input id={id} type="checkbox" name={name} onChange={changed} />
      <div className={`${classes.CheckButtonLabel}`}>{children}</div>
    </label>
  );
};

CheckButton.propTypes = {
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.string,
};

export default CheckButton;
