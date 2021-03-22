// import { FaArrowLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

import routes from "../../shared/utils/routes";
import userImg from "../../assets/img/user1.jpg";
import carouselImg from "../../assets/img/carousel.svg";
import IconButton from "../../shared/components/button/IconButton";
import UserInfo from "../../shared/components/navigation/user-info/UserInfo";
import Switcher from "../../shared/components/switcher/Switcher";
import Carousel from "../../shared/components/carousel/Carousel";
import Statistics from "../../shared/components/statistics/Statistics";
import classes from "./Home.module.css";
import Menu from "./componets/menu/Menu";
import RequestBadges from "./componets/request-badges/RequestBadges";
import Map from "./componets/map/Map";

const carouselData = [
  {
    id: "1",
    title: "Blood Donation Campaign 2021",
    by: "Admin",
    time: "1 minute ago",
    held: "Held on Today",
    img: carouselImg,
    path: routes.home,
  },
  {
    id: "2",
    title: "Blood Donation Campaign 2021",
    by: "Admin",
    time: "1 minute ago",
    held: "Held on Today",
    img: carouselImg,
    path: routes.home,
  },
  {
    id: "3",
    title: "Blood Donation Campaign 2021",
    by: "Admin",
    time: "1 minute ago",
    held: "Held on Today",
    img: carouselImg,
    path: routes.home,
  },
  {
    id: "4",
    title: "Blood Donation Campaign 2021",
    by: "Admin",
    time: "1 minute ago",
    held: "Held on Today",
    img: carouselImg,
    path: routes.home,
  },
];

const Home = () => {
  return (
    <div className={`${classes.Home}`}>
      <header className={`${classes.Header}`}>
        <div className={`${classes.HeaderTitle}`}>
          <span>Campaign</span>
          <Switcher changed={() => {}} name="status">
            Available
          </Switcher>
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
            clicked={() => {}}
          >
            <FiMoreVertical />
          </IconButton>
        </div>
      </header>
      <div className={`${classes.Body}`}>
        {/* Body Top Start */}
        <Carousel data={carouselData} className={`${classes.BodyTop}`} />
        {/* Body Top End */}

        {/* Body Bottom Start */}
        <div className={`${classes.BodyBottom}`}>
          {/* Body Bottom Left Start */}
          <section className={`${classes.BodyBottomLeft}`}>
            <h3>Menu</h3>
            <Menu />
            <h3>Requests</h3>
            <RequestBadges />
            <Statistics />
          </section>
          {/* Body Bottom Left End */}
          {/* Body Bottom Right Start */}
          <section className={`${classes.BodyBottomRight}`}>
            <h3>Map</h3>
            <Map />
          </section>
          {/* Body Bottom Right End */}
        </div>
        {/* Body Bottom End */}
      </div>
    </div>
  );
};

export default Home;
