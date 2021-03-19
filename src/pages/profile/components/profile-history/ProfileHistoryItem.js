import PropTypes from "prop-types";

import classes from "./ProfileHistory.module.css";

const ProfileHistoryItem = ({ info }) => {
  return (
    <div className={`${classes.HistoryItem}`}>
      {/* History Item Left start */}
      <div className={`${classes.HistoryItemLeft}`}>
        <span>{info.date.month}</span>
        <span>{info.date.day}</span>
      </div>
      {/* History Item Left End */}
      {/* History Item Mid Start */}
      <div className={`${classes.HistoryItemMid}`}>
        <h3>{info.hospital}</h3>
        <span>
          {info.bag > 1 ? `${info.bag} bags blood` : `${info.bag} bag blood`}
        </span>
      </div>
      {/* History Item Mid End */}
      {/* History Item right Start */}
      <span className={`${classes.HistoryItemRight}`}>6 days ago</span>
      {/* History Item right End */}
    </div>
  );
};
ProfileHistoryItem.propTypes = {
  info: PropTypes.exact({
    id: PropTypes.string.isRequired,
    hospital: PropTypes.string.isRequired,
    bag: PropTypes.number.isRequired,
    date: PropTypes.exact({
      day: PropTypes.number.isRequired,
      month: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProfileHistoryItem;
