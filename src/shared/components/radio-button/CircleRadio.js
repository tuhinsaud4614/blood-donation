import PropTypes from "prop-types";

import classes from "./Radio.module.css";

const CircleRadio = ({
  id,
  name,
  value,
  changed,
  defaultChecked = false,
  children,
}) => {
  return (
    <label className={`${classes.CircleRadio}`}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={changed}
        defaultChecked={defaultChecked}
      />
      <div className={`${classes.CircleRadioLabel}`}>{children}</div>
    </label>
  );
};

CircleRadio.propTypes = {
  defaultChecked: PropTypes.bool,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.string,
};

export default CircleRadio;
