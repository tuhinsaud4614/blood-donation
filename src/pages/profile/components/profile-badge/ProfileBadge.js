import PropTypes from "prop-types";
import classes from "./ProfileBadge.module.css";

const ProfileBadge = ({ img, title, active }) => {
  return (
    <div className={`${classes.ProfileBadge}`}>
      <img src={img} alt={title} />
      <h3 className={`m-0 ${active && classes.Active}`}>{title}</h3>
    </div>
  );
};

ProfileBadge.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default ProfileBadge;
