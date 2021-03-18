import PropTypes from "prop-types";

import classes from "./UserInfo.module.css";
import Avatar from "../../../../shared/components/avatar/Avatar";

const UserInfo = ({ data, customClass }) => {
  return (
    <div className={`${classes.UserInfo}`}>
      <div className={`${classes.Texts}`}>
        <h3>{data.name}</h3>
        <p>{data.status}</p>
      </div>
      <Avatar src={data.avatar} customClass={customClass} />
    </div>
  );
};

UserInfo.propTypes = {
  data: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  customClass: PropTypes.string,
};

export default UserInfo;
