import PropTypes from "prop-types";
import { FiShare2 } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import classes from "./RequestCard.module.css";

const RequestCard = (data) => {
  return (
    <div className={`${classes.RequestCard} bx-sh3`}>
      {/* Request card top  start */}
      <div className={`${classes.RequestCardTop}`}>
        <div className={`${classes.RequestCardTopLeft}`}>
          <h3>Scheduled</h3>
          <span className={`text-muted`}>at sun 11.30pm</span>
        </div>
        <div className={`${classes.RequestCardTopRight}`}>
          <div>
            <span className={`badge badge-danger `}>Contract</span>
            <FiShare2 className={`text-danger`} />
          </div>
          <h3>O+</h3>
        </div>
      </div>
      {/* Request card top  end */}
      {/* Request card mid  start */}
      <div className={`${classes.RequestCardMid}`}>
        <h4>
          Jarin Hospital <span className={`text-muted`}>3km Away</span>
        </h4>
        <span className={`text-muted`}>1 minute ago</span>
      </div>
      {/* Request card mid  end */}
      <hr />
      {/* Request card bottom start */}
      <div className={`${classes.RequestCardBottom}`}>
        <span className={`text-muted`}>
          <IoLocationOutline />
          21/3, Los Angeles, CA
        </span>
        <span className={`text-muted`}>
          <FaUser />
          Brother
        </span>
      </div>
      {/* Request card bottom end */}
    </div>
  );
};

RequestCard.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    hospital: PropTypes.string,
    distance: PropTypes.string,
  }),
};

export default RequestCard;
