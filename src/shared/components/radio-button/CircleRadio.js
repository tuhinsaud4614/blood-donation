import PropTypes from "prop-types";

import classes from "./Radio.module.css";

const CircleRadio = ({ id, name, changed, children }) => {
  return (
    <label className={`${classes.CircleRadio}`}>
      <input id={id} type="radio" name={name} onChange={changed} />
      <div className={`${classes.CircleRadioLabel}`}>{children}</div>
    </label>
  );
};

CircleRadio.propTypes = {
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.string,
};

export default CircleRadio;
