import PropTypes from "prop-types";

import classes from "./Badge.module.css";

const Badge = ({ badgeContent, children }) => {
  return (
    <span className={`${classes.Badge} bx-sh3`}>
      {children}
      <span className={`${classes.BadgeContent}`}>{badgeContent}</span>
    </span>
  );
};

Badge.propTypes = {
  badgeContent: PropTypes.element,
  children: PropTypes.element,
};

export default Badge;
