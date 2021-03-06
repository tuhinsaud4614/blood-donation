import { FaArrowLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { useHistory } from "react-router";

import userImg from "../../assets/img/user1.jpg";
import routes from "../../shared/utils/routes";
import IconButton from "../../shared/components/button/IconButton";
import UserInfo from "../../shared/components/navigation/user-info/UserInfo";
import ProfileBadges from "./components/profile-badge/ProfileBadges";
import ProfileCard from "./components/profile-card/ProfileCard";
import ProfileHistory from "./components/profile-history/ProfileHistory";
import classes from "./Profile.module.css";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/auth/actions";

const Profile = () => {
  const { push } = useHistory();
  const rdxDispatch = useDispatch();
  return (
    <div className={`${classes.Profile}`}>
      <header className={`${classes.Header}`}>
        <div className={`${classes.HeaderTitle}`}>
          <IconButton clicked={() => push(routes.request)}>
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
            clicked={() => rdxDispatch(signOut())}
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
