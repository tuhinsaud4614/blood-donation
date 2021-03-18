import PropTypes from "prop-types";

import dropImg from "../../../../assets/img/blood-drop-1.svg";
import liveSaver from "../../../../assets/img/live-saver.png";
import tree from "../../../../assets/img/tree.png";
import certified from "../../../../assets/img/certified.png";
import superman from "../../../../assets/img/superman.png";
import lives from "../../../../assets/img/lives.png";
import fast from "../../../../assets/img/fast.png";
import clean from "../../../../assets/img/clean.png";
import ProfileBadge from "../profile-badge/ProfileBadge";

import classes from "./ProfileCard.module.css";
import Divider from "../../../../shared/components/Divider";
import Progress from "./Progress";

const ProfileCard = ({ user }) => {
  return (
    <article className={`${classes.ProfileCard} bx-sh2`}>
      {/* Header start */}
      <section className={`${classes.Header}`}>
        <img src={user.img} alt="user" />
        <div className={`${classes.HeaderContent}`}>
          <h3>{user.name}</h3>
          <p>{user.status}</p>
          <span className={`${classes.HeaderContentIcon}`}>
            <img src={dropImg} alt="drop" />
            <span>{user.group}</span>
          </span>
        </div>
      </section>
      {/* Header end */}
      {/* Body Start */}
      <section className={`${classes.Body}`}>
        {/* Body Top Start */}
        <div className={`${classes.BodyTop}`}>
          <h3>Info</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Body Top End */}
        {/* Body mid Start */}
        <div className={`${classes.BodyMid}`}>
          <h3>Badges</h3>
          <div className={`${classes.BodyMidBadges}`}>
            <ProfileBadge title="Life Saver" img={liveSaver} />
            <ProfileBadge title="Life Saver" img={tree} />
            <ProfileBadge title="Certified" img={certified} />
            <ProfileBadge title="Superman" img={superman} />
            <ProfileBadge title="50 Lives" img={lives} />
            <ProfileBadge title="Fast" img={fast} />
            <ProfileBadge title="clean" img={clean} />
          </div>
        </div>
        {/* Body mid End */}
        <Divider type="horizontal" />
        {/* Body bottom start */}
        <Progress passedDays="27" />
        {/* Body bottom End */}
      </section>
      {/* Body end */}
    </article>
  );
};
ProfileCard.propTypes = {
  user: PropTypes.exact({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProfileCard;
