import PropTypes from "prop-types";

import classes from "./Switcher.module.css";

const Switcher = ({ disabled = false, id, name, changed, children }) => {
  return (
    <label className={`${classes.Switcher}`}>
      <input id={id} type="checkbox" name={name} onChange={changed} disabled={disabled}/>
      <div className={`${classes.SwitcherLabel}`}>{children}</div>
    </label>
  );
};

Switcher.propTypes = {
  disabled: PropTypes.bool,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.string,
};

export default Switcher;
