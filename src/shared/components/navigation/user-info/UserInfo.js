import PropTypes from "prop-types";

import classes from "./UserInfo.module.css";
import Avatar from "../../../../shared/components/avatar/Avatar";
import { useSelector } from "react-redux";

const UserInfo = ({ data, customClass }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={`${classes.UserInfo}`}>
      <div className={`${classes.Texts} `}>
        <h3>{user.username}</h3>
        <p>{data.status}</p>
      </div>
      <Avatar src={user.avatar} customClass={customClass} />
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
