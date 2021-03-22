import PropTypes from "prop-types";
import { FiShare2 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import classes from "./RequestCard.module.css";
import Divider from "../../../../shared/components/Divider";

const RequestCard = ({data}) => {
  return (
    <div className={`${classes.RequestCard} bx-sh3`}>

      {/* Request card top  start */}
      <div className={`${classes.RequestCardTop}`}>
        <div className={`${classes.RequestCardTopLeft}`}>
          <h3>{data.type}</h3>
          <span className={`text-muted`}>
            {data.time ? `at ${data.time}` : "Expired"}
          </span>
        </div>
        <div className={`${classes.RequestCardTopRight}`}>
          <div>
            <span
              className={`badge ${
                data.badgeLabel === "managed" ? "badge-success" : "badge-danger"
              } `}
            >
              {data.badgeLabel}
            </span>
            {data.badgeLabel === "managed" ? (
              <MdDeleteForever className={`text-danger`} />
            ) : (
              <FiShare2 className={`text-danger`} />
            )}
          </div>
          <h3>{data.bloodGroup}</h3>
        </div>
      </div>
      {/* Request card top  end */}
      {/* Request card mid  start */}
      <div className={`${classes.RequestCardMid}`}>
        <h4>
          {data.hospital}{" "}
          <span className={`text-muted`}>{data.distance} Away</span>
        </h4>
        <span className={`text-muted`}>1 minute ago</span>
      </div>
      {/* Request card mid  end */}
      <Divider type="horizontal" space={0} />
      {/* Request card bottom start */}
      <div className={`${classes.RequestCardBottom}`}>
        <span className={`text-muted`}>
          <IoLocationOutline />
          {data.location}
        </span>
        <span className={`text-muted`}>
          <FaUser />
          {data.relation}
        </span>
      </div>
      {/* Request card bottom end */}
    </div>
  );
};

RequestCard.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    hospital: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    time: PropTypes.string,
    location: PropTypes.string.isRequired,
    relation: PropTypes.string.isRequired,
    bloodGroup: PropTypes.string.isRequired,
    badgeLabel: PropTypes.oneOf(["contract", "managed", "edit"]).isRequired,
  }),
};

export default RequestCard;
