import PropTypes from "prop-types";

import classes from "./ProfileCard.module.css";

const Progress = ({ passedDays }) => {
  const left = 30 - passedDays;
  const percentage = (100 * passedDays) / 30;
  return (
    <>
      <div className={`${classes.Progress} progress`}>
        <div
          className={`${classes.ProgressBar} progress-bar`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p className={`text-muted`}>
        <span>{left}</span> days left until you can donate again
      </p>
    </>
  );
};
Progress.propTypes = {
  passedDays: PropTypes.string.isRequired,
};
export default Progress;
