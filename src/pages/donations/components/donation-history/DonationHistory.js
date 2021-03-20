import PropTypes from "prop-types";
import { Fragment } from "react";

import Divider from "../../../../shared/components/Divider";
import DonationHistoryItem from "./DonationHistoryItem";
import classes from "./DonationHistory.module.css";

const DonationHistory = ({ data, units }) => {
  return (
    <div className={`${classes.DonationHistory} bx-sh2`}>
      <h2 className={`${classes.Head}`}>
        You Have saved 5 lives, donated {units} unit
      </h2>
      <div className={`${classes.Body}`}>
        {data.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && <Divider type="horizontal" />}
            <DonationHistoryItem
              index={index + 1}
              count={item.count}
              key={item.id}
              hospital={item.hospital}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

DonationHistory.protoTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      hospital: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  units: PropTypes.number.isRequired,
};

export default DonationHistory;
