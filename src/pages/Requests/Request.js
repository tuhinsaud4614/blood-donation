import { FaArrowLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";

import routes from "../../shared/utils/routes";
import userImg from "../../assets/img/user1.jpg";
import ambulance from "../../assets/img/ambulance.png";
import medicalBag from "../../assets/img/medical-bag.png";
import heartBit from "../../assets/img/heart-bit.png";
import Avatar from "../../shared/components/avatar/Avatar";
import RequestCard from "./components/request-card/RequestCard";
import IconButton from "../../shared/components/button/IconButton";
import UserInfo from "../../shared/components/navigation/user-info/UserInfo";
import Badge from "../../shared/components/badge/Badge";
import RequestForm from "./components/request-form/RequestForm";
import HistoryCard from "./components/history-card/HistoryCard";
import classes from "./Request.module.css";

const requestBadgeData = [
  {
    label: "urgent request",
    img: ambulance,
    count: "9+",
    link: routes.request,
  },
  { label: "my request", img: medicalBag, count: "2", link: routes.request },
  {
    label: "post request",
    img: heartBit,
    count: undefined,
    link: routes.request,
  },
];

const urgentRequest = [
  {
    id: "1",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    time: "Sun 11:30 PM",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "contract",
  },
  {
    id: "2",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    time: "Sun 11:30 PM",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "contract",
  },
];

const myRequest = [
  {
    id: "1",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "managed",
  },
  {
    id: "2",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    time: "Sun 11:30 PM",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "edit",
  },
];

const recentRequest = [
  {
    id: "1",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    time: "Sun 11:30 PM",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "contract",
  },
  {
    id: "2",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    time: "Sun 11:30 PM",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "contract",
  },
  {
    id: "3",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    time: "Sun 11:30 PM",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "contract",
  },
  {
    id: "4",
    type: "Scheduled",
    hospital: "Jerin Hospital",
    distance: "3km",
    time: "Sun 11:30 PM",
    location: "21/3, Los Angeles, CA",
    relation: "Brother",
    bloodGroup: "O+",
    badgeLabel: "contract",
  },
];

const Request = () => {
  return (
    <div className={`${classes.Request}`}>
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
          {/* Request Badges start */}
          <div className={`${classes.RequestBadges}`}>
            {requestBadgeData.map((item) => (
              <Link
                key={item.label}
                className={`${classes.RequestBadge}`}
                to={item.link}
              >
                <Badge
                  shadow
                  label={item.label}
                  badgeContent={
                    item.count && (
                      <Avatar height={20} width={20}>
                        {item.count}
                      </Avatar>
                    )
                  }
                >
                  <Avatar
                    height={35}
                    width={35}
                    src={item.img}
                    alt={item.label}
                  />
                </Badge>
              </Link>
            ))}
          </div>
          {/* Request Badges end */}
          <h3>Urgent Requests</h3>
          {/* Urgent Request card start */}
          <div className={`${classes.RequestCard}`}>
            {urgentRequest.map((item) => (
              <RequestCard key={item.id} data={item} />
            ))}
          </div>
          {/* Urgent Request card start */}
          <h3>My Requests</h3>
          {/* Urgent Request card start */}
          <div className={`${classes.RequestCard}`}>
            {myRequest.map((item) => (
              <RequestCard key={item.id} data={item} />
            ))}
          </div>
          {/* Urgent Request card start */}
        </section>
        {/* Body Left End */}
        {/* Body Right Start */}
        <section className={`${classes.BodyRight}`}>
          <h3>Blood Request</h3>
          {/* Body Right Top Start  */}
          <section className={`${classes.BodyRightTop}`}>
            <RequestForm />
            <div className={`pl-3 ${classes.BodyRightTopHistory}`}>
              <h3>Recent History</h3>
              <div className={`row m-0`}>
                <div className={`p-0 col-6 pr-2 pb-3`}>
                  <HistoryCard
                    data={{
                      group: "O+",
                      place: "Los Angeles",
                      type: "urgent",
                    }}
                  />
                </div>
                <div className={`p-0 col-6 pb-3`}>
                  <HistoryCard
                    data={{
                      group: "A+",
                      place: "Lorem Ipsum",
                      type: "scheduled",
                    }}
                  />
                </div>
                <div className={`p-0 col-6 pb-3 pr-2`}>
                  <HistoryCard
                    data={{
                      group: "O+",
                      place: "Los Angeles",
                      type: "urgent",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Body Right Top End  */}
          {/* Body Right Bottom Start  */}
          <h3>Recent Requests</h3>
          <div className="row m-0">
            {recentRequest.map((item) => {
              return (
                <div key={item.id} className="col-6 pb-3">
                  <RequestCard data={item} />
                </div>
              );
            })}
          </div>
          {/* Body Right Bottom End  */}
        </section>
        {/* Body Right end */}
      </div>
    </div>
  );
};

export default Request;
