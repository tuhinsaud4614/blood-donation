import PropTypes from "prop-types";

import classes from "./NotificationCard.module.css";

const NotificationCard = ({ data, avatar }) => {
  return (
    <div className={`${classes.NotificationCard} bx-sh3`}>
      {avatar}
      <h3 className={`m-0 ${classes.Text}`}>
        <span>{data.sender}</span> {data.msg}
      </h3>
      <p className={`text-muted m-0`}>1 minute ago</p>
    </div>
  );
};

NotificationCard.propTypes = {
  data: PropTypes.exact({
    sender: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }).isRequired,
  avatar: PropTypes.element,
};

export default NotificationCard;
