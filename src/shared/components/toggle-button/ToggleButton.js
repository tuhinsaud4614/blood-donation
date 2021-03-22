import { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./ToggleButton.module.css";

const ToggleButton = ({ name, changed, defaultValue, values }) => {
  return (
    <div className={`${classes.ToggleButton} bx-sh2`}>
      {values.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && <span className={`${classes.Divider}`}>|</span>}
          <label className={`${classes.Button}`}>
            <input
              type="radio"
              name={name}
              value={item}
              onChange={changed}
              defaultChecked={defaultValue.toLowerCase() === item.toLowerCase()}
            />
            <div className={`${classes.ButtonLabel}`}>{item}</div>
          </label>
        </Fragment>
      ))}
    </div>
  );
};

ToggleButton.propTypes = {
  changed: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default ToggleButton;
