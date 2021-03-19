import PropTypes from "prop-types";

import classes from "./Ranger.module.css";

const Ranger = ({ id, name, label, start, end, step, changed, value }) => {
  return (
    <div className={`${classes.Container} bx-sh2`}>
      <span className={`${classes.Label}`}>{label}</span>
      <div className={`${classes.Content}`}>
        <span>{start} km</span>
        <input
          className={`${classes.Ranger}`}
          type="range"
          min={start}
          max={end}
          step={step}
          value={value}
          name={name}
          id={id}
          onChange={changed}
        />
        <span>{end} km</span>
      </div>
    </div>
  );
};

Ranger.propTypes = {
  label: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
};

export default Ranger;
