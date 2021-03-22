import PropTypes from "prop-types";

import classes from "./HistoryCard.module.css";
import Avatar from "../../../../shared/components/avatar/Avatar";

const HistoryCard = ({ data, customClass }) => {
  return (
    <div className={`${classes.HistoryCard} bx-sh3`}>
      <Avatar
        height={30}
        width={30}
        customClass={`${customClass} ${
          data.type.toLowerCase() === "scheduled"
            ? classes.HistoryAvatar
            : classes.HistoryAvatarUr
        }`}
      >
        {data.group}
      </Avatar>
      <h3 className={`m-0`}>{data.place}</h3>
      <p className={`text-muted m-0`}>{data.type}</p>
    </div>
  );
};

HistoryCard.propTypes = {
  data: PropTypes.exact({
    group: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  customClass: PropTypes.string,
};

export default HistoryCard;
