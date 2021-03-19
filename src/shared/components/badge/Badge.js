import PropTypes from "prop-types";

import classes from "./Badge.module.css";

const Badge = ({ badgeContent, label, shadow = false, children }) => {
  const shadowClass = shadow ? `${classes.Shadow} bx-sh3` : "";
  return (
    <span className={`${classes.BadgeContainer}`}>
      <span className={`${classes.Badge} ${shadowClass}`}>
        {children}
        {badgeContent && (
          <span className={`${classes.BadgeContent}`}>{badgeContent}</span>
        )}
      </span>
      {label && <span className={`${classes.Label}`}>{label}</span>}
    </span>
  );
};

Badge.propTypes = {
  badgeContent: PropTypes.element,
  children: PropTypes.element.isRequired,
  shadow: PropTypes.bool,
  label: PropTypes.string,
};

export default Badge;
