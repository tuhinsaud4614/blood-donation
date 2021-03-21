import PropTypes from "prop-types";

import classes from "./NotificationCard.module.css";

const NotificationCard = ({ className, data, avatar, children }) => {
  return (
    <div className={`${classes.NotificationCard} bx-sh3 ${className}`}>
      {avatar}
      <h3 className={`m-0 ${classes.Text}`}>
        <span>{data.sender}</span> {children}
      </h3>
      <p className={`text-muted m-0`}>1 minute ago</p>
    </div>
  );
};

NotificationCard.propTypes = {
  data: PropTypes.exact({
    sender: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  avatar: PropTypes.element,
  className: PropTypes.string,
};

export default NotificationCard;
