import { FaArrowLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

import userImg from "../../assets/img/user1.jpg";
import IconButton from "../../shared/components/button/IconButton";
import UserInfo from "../../shared/components/navigation/user-info/UserInfo";
import ProfileBadges from "./components/profile-badge/ProfileBadges";
import ProfileCard from "./components/profile-card/ProfileCard";
import ProfileHistory from "./components/profile-history/ProfileHistory";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={`${classes.Profile}`}>
      <header className={`${classes.Header}`}>
        <div className={`${classes.HeaderTitle}`}>
          <IconButton clicked={() => {}}>
            <FaArrowLeft />
          </IconButton>
          <span>Requests</span>
        </div>
        <div className={`ml-auto ${classes.UserInfo}`}>
          <UserInfo
            data={{
              avatar: userImg,
              name: "John Doe",
              status: "Top Rated Donor",
            }}
          />
          <IconButton
            className={`${classes.UserInfoButton}`}
            clicked={() => {}}
          >
            <FiMoreVertical />
          </IconButton>
        </div>
      </header>
      <div className={`${classes.Body}`}>
        {/* Body Left Start */}
        <section className={`${classes.BodyLeft}`}>
          <ProfileCard
            user={{
              name: "Ashu Priya",
              status: "Beginner Donor",
              group: "O+",
              img: userImg,
            }}
          />
        </section>
        {/* Body Left End */}
        {/* Body Right Start */}
        <section className={`${classes.BodyRight}`}>
          <ProfileHistory />
          <ProfileBadges />
        </section>
        {/* Body Right end */}
      </div>
    </div>
  );
};

export default Profile;
