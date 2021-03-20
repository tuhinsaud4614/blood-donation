import PropTypes from "prop-types";

import Avatar from "../../../../shared/components/avatar/Avatar";
import classes from "./DonationHistory.module.css";

const DonationHistoryItem = ({ index, hospital, count }) => {
  const value = count < 2 ? "Time" : "Times";
  return (
    <div className={`${classes.Item}`}>
      <Avatar customClass={`${classes.ItemAvatar}`}>{index}</Avatar>
      <div className={`${classes.ItemRight}`}>
        <span>{hospital}</span>
        <span>
          {count} {value}
        </span>
      </div>
    </div>
  );
};
DonationHistoryItem.protoTypes = {
  index: PropTypes.number.isRequired,
  hospital: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default DonationHistoryItem;
