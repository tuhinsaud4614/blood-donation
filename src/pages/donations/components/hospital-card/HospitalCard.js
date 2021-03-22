import PropTypes from "prop-types";
import { FiMoreVertical } from "react-icons/fi";
import { FaCalendarCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import img from "../../../../assets/img/blood-drop-1.svg";
import Avatar from "../../../../shared/components/avatar/Avatar";
import IconButton from "../../../../shared/components/button/IconButton";
import classes from "./HospitalCard.module.css";

const HospitalCard = ({ className, name, date, address, clicked }) => {
  return (
    <div className={`${classes.HospitalCard} ${className || ""} bx-sh2`}>
      <IconButton clicked={() => {}} className={`${classes.Action}`}>
        <FiMoreVertical />
      </IconButton>
      <div className={`${classes.Content}`}>
        <Avatar
          src={img}
          alt="blood"
          customClass={`${classes.Avatar} bx-sh3`}
        />
        <div className={`${classes.ContentRight}`}>
          <h3>{name}</h3>
          <span className="text-muted">
            <IoLocationOutline />
            {address}
          </span>
          <span className="text-muted">
            <FaCalendarCheck />
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

HospitalCard.protoTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  className: PropTypes.string,
  clicked: PropTypes.func.isRequired,
};

export default HospitalCard;
