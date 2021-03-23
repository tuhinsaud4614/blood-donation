import { useHistory } from "react-router";
import { FaBullhorn, FaArrowLeft, FaHistory } from "react-icons/fa";
import { FiAward, FiMoreVertical } from "react-icons/fi";

import userImg from "../../assets/img/user1.jpg";
import Avatar from "../../shared/components/avatar/Avatar";
import Divider from "../../shared/components/Divider";
import IconButton from "../../shared/components/button/IconButton";
import UserInfo from "../../shared/components/navigation/user-info/UserInfo";
import NotificationCard from "./components/notification-card/NotificationCard";
import classes from "./Notifications.module.css";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/auth/actions";

const Notifications = () => {
  const { goBack } = useHistory();
  const rdxDispatch = useDispatch();
  return (
    <div className={`${classes.Notifications}`}>
      <header className={`${classes.Header}`}>
        <div className={`${classes.HeaderTitle}`}>
          <IconButton clicked={() => goBack()}>
            <FaArrowLeft />
          </IconButton>
          <span>Notifications</span>
        </div>
        <div className={`${classes.userInfo}`}>
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
        <section className={`${classes.BodyLeft}`}>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "Musa Clinic",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>A+</Avatar>
            }
          >
            <>Posted a blood request near you,</>
          </NotificationCard>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "Musa Clinic",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>A+</Avatar>
            }
          >
            <>Posted a blood request near you,</>
          </NotificationCard>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "Musa Clinic",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>A+</Avatar>
            }
          >
            <>Posted a blood request near you,</>
          </NotificationCard>
          <h3>Yesterday</h3>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "Musa Clinic",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>
                <FaBullhorn />
              </Avatar>
            }
          >
            <>
              requested you for <b>O+</b> blood
            </>
          </NotificationCard>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "Musa Clinic",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>
                <FiAward />
              </Avatar>
            }
          >
            <>earned a new Badge</>
          </NotificationCard>
          <h3>Yesterday</h3>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "You",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>
                <FiAward />
              </Avatar>
            }
          >
            <>earned a new Badge</>
          </NotificationCard>
        </section>
        <Divider />
        {/* Body Right Start */}
        <section className={`${classes.BodyRight}`}>
          <h2>History</h2>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: " ",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>
                <FaBullhorn />
              </Avatar>
            }
          >
            <>
              You Accept request from <b>John Adam</b>
            </>
          </NotificationCard>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "Musa Clinic",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>A+</Avatar>
            }
          >
            <>Posted a blood request for your brother</>
          </NotificationCard>
          <h3>Yesterday</h3>
          <NotificationCard
            className={`mb-4`}
            data={{
              sender: "You",
            }}
            avatar={
              <Avatar customClass={`${classes.Avatar} bx-sh3`}>
                <FaHistory />
              </Avatar>
            }
          >
            <>
              posted a blood request which was expired. <b>Republish</b> it
            </>
          </NotificationCard>
        </section>
        {/* Body Right end */}
      </div>
    </div>
  );
};

export default Notifications;
