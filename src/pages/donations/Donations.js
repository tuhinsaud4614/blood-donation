import { useHistory } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

import userImg from "../../assets/img/user1.jpg";
import userImg2 from "../../assets/img/user2.jpg";
import IconButton from "../../shared/components/button/IconButton";
import UserInfo from "../../shared/components/navigation/user-info/UserInfo";
import HospitalCard from "./components/hospital-card/HospitalCard";
import DonationHistory from "./components/donation-history/DonationHistory";
import ReviewCard from "./components/review-card/ReviewCard";
import classes from "./Donations.module.css";

const hospitalData = [
  {
    id: "1",
    name: "Musa Clinic",
    address: "21/3,Los Angeles, CA",
    date: "Monday 2 Jan, 11:08",
  },
  {
    id: "2",
    name: "Musa Clinic",
    address: "21/3,Los Angeles, CA",
    date: "Monday 2 Jan, 11:08",
  },
];

const donationHistory = [
  { id: "1", hospital: "Kingsland Hospital", count: 2 },
  { id: "2", hospital: "Kingsland Hospital", count: 1 },
  { id: "3", hospital: "Kingsland Hospital", count: 1 },
];

const reviews = [
  {
    id: "1",
    reviewer: { name: "Ashik Prottoy", date: "Dec 27", img: userImg2 },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum distinctio quam. Doloribus ipsum distinctio quam.  Doloribus `,
  },
  {
    id: "2",
    reviewer: { name: "Ashik Prottoy", date: "Dec 27", img: userImg2 },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum distinctio quam. Doloribus ipsum distinctio quam.  Doloribus `,
  },
];

const Donations = () => {
  const { goBack } = useHistory();
  return (
    <div className={`${classes.Donations}`}>
      <header className={`${classes.Header}`}>
        <div className={`${classes.HeaderTitle}`}>
          <IconButton clicked={() => goBack()}>
            <FaArrowLeft />
          </IconButton>
          <span>Donations</span>
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
        <div className={`${classes.BodyTop}`}>
          {hospitalData.map((item) => (
            <HospitalCard
              key={item.id}
              className={`${classes.HospitalCard}`}
              clicked={() => {}}
              name={item.name}
              address={item.address}
              date={item.date}
            />
          ))}
        </div>
        {/* Body Top End */}

        {/* Body Bottom Start */}
        <div className={`${classes.BodyBottom}`}>
          {/* Body Bottom Left Start */}
          <section className={`${classes.BodyBottomLeft}`}>
            <h3>History</h3>
            <DonationHistory units={50} data={donationHistory} />
          </section>
          {/* Body Bottom Left End */}
          {/* Body Bottom Right Start */}
          <section className={`${classes.BodyBottomRight}`}>
            <h3>Reviews</h3>
            {reviews.map((item) => (
              <ReviewCard
                key={item.id}
                reviewer={item.reviewer}
                description={item.description}
                likeHandler={() => {}}
                shareHandler={() => {}}
              />
            ))}
          </section>
          {/* Body Bottom Right End */}
        </div>
        {/* Body Bottom End */}
      </div>
    </div>
  );
};

export default Donations;
