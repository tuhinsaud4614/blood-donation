// import GenderRadio from "./shared/components/radio-button/GenderRadio";
import img from "./assets/img/user2.jpg";
import ProfileBadge from "./pages/profile/components/profile-badge/ProfileBadge";
import ProfileCard from "./pages/profile/components/profile-card/ProfileCard";

import Avatar from "./shared/components/avatar/Avatar";
import IconButton from "./shared/components/button/IconButton";
import Badge from "./shared/components/badge/Badge";
import CheckButton from "./shared/components/check-button/CheckButton";
import Switcher from "./shared/components/switcher/Switcher";
import UserInfo from "./shared/components/navigation/user-info/UserInfo";
import Select from "./shared/components/select/Select";
import Carousel from "./shared/components/carousel/Carousel";
import ProfileHistory from "./pages/profile/components/profile-history/ProfileHistory";
import { FiSearch } from "react-icons/fi";
import SearchBox from "./shared/components/search-box/SearchBox";
import Ranger from "./shared/components/ranger/Ranger";
import ToggleButton from "./shared/components/toggle-button/ToggleButton";
import Sidebar from "./shared/components/navigation/sidebar/Sidebar";
import Statistics from "./shared/components/statistics/Statistics";
import ReviewCard from "./pages/donations/components/review-card/ReviewCard";
import HospitalCard from "./pages/donations/components/hospital-card/HospitalCard";
import DonationHistory from "./pages/donations/components/donation-history/DonationHistory";
import Map from "./shared/components/map/Map";
import ListTile from "./shared/components/map/list-tile/ListTile";
import { IoMaleSharp } from "react-icons/io5";
<div style={{ padding: "20px" }}>
      {/* <ListTile
        address="26 North Camelia, LA, 45569"
        bloodGroup="AB+"
        img={img}
        mobile="88019319311"
        title="John Doe"
        status="available"
        titleIcon={<IoMaleSharp />}
        rating={2}
        expandData={{
          reviewer: {
            count: 2,
            name: "John ",
            img: img,
            date: "7 Dec",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
          },
          hospital: { period: "Current" },
        }}
      />
      <ListTile
        address="26 North Camelia, LA, 45569"
        // bloodGroup="AB+"
        img={img}
        mobile="88019319311"
        title="John Doe"
        status="open now"
        // titleIcon={<IoMaleSharp />}
        rating={2}
        expandData={{
          reviewer: {
            count: 2,
            name: "John ",
            img: img,
            date: "7 Dec",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
          },
          hospital: { period: "Center Hours" },
        }}
      /> */}
      {/* <Map>
        <div>hello</div>
      </Map> */}
      {/* <DonationHistory
        units={50}
        data={[
          { id: "1", hospital: "Kingsland Hospital", count: 2 },
          { id: "2", hospital: "Kingsland Hospital", count: 1 },
          { id: "3", hospital: "Kingsland Hospital", count: 1 },
        ]}
      /> */}
      {/* <HospitalCard
        clicked={() => {}}
        name="Musa Clinic"
        address="21/3,Los Angeles, CA"
        date="Monday 2 Jan, 11:08"
      /> */}
      {/* <ReviewCard
        reviewer={{ name: "Ashik Prottoy", date: "Dec 27", img: img }}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum distinctio quam, obcaecati eum nulla? Adipisci modi repellendus impedit ullam. Sed enim facilis quos numquam amet rem! Vero dolorem cumque, odit laborum laudantium blanditiis adipisci quos, soluta quidem molestiae facere quis harum optio mollitia ipsa repellendus quod quisquam libero labore.`}
        likeHandler={() => {}}
        shareHandler={() => {}}
      /> */}

      {/* <Statistics/> */}
      {/* <Sidebar/> */}
      {/* <ToggleButton
        changed={(e) => console.log(e.target.value)}
        name="Toggle"
        values={["Hospital", "Donor"]}
      /> */}
      {/* <SearchBox
        id="text"
        name="text"
        placeholder="Search here"
        value={state}
        changed={(e) => {
          setstate(e.target.value);
        }}
        submitted={(e) => {
          
        }}
        icon={<FiSearch />}
      /> */}
      {/* <Switcher name="Switch" changed={() => {}}>
        Available
      </Switcher> */}
      {/* <IconButton
        disabled
        clicked={() => {
          console.log("cliked");
        }}
      >
        <FaTimes />
      </IconButton> */}
      {/* <ProfileHistory /> */}
      {/* <Carousel
        data={[
          {
            id: "1",
            title: "Blood Donation Campaign 2021",
            by: "Admin",
            time: "1 minute ago",
            held: "Held on Today",
            img: img,
            path: "#",
          },
          {
            id: "2",
            title: "Blood Donation Campaign 2021",
            by: "Admin",
            time: "1 minute ago",
            held: "Held on Today",
            img: img,
            path: "#",
          },
          {
            id: "3",
            title: "Blood Donation Campaign 2021",
            by: "Admin",
            time: "1 minute ago",
            held: "Held on Today",
            img: img,
            path: "#",
          },
          {
            id: "4",
            title: "Blood Donation Campaign 2021",
            by: "Admin",
            time: "1 minute ago",
            held: "Held on Today",
            img: img,
            path: "#",
          },
        ]}
      /> */}
      {/* <Badge
        shadow
        label="My Request"
        badgeContent={
          <Avatar height={25} width={25}>
            9+
          </Avatar>
        }
      >
        <Avatar height={50} width={50} src={img} alt="icon" />
      </Badge> */}
      {/* <ProfileCard
        user={{
          name: "Ashu Priya",
          status: "Beginner Donor",
          group: "O+",
          img: img,
        }}
      /> */}
      {/* <ProfileBadge title="Life Saver" img={img} active />
      <ProfileBadge title="Fast" img={img} /> */}
      {/* <NotificationCard
        avatar={<Avatar customClass={`shadow`}>AB+</Avatar>}
        data={{ msg: "Posted a blood request near you", sender: "Musa Clinic" }}
      /> */}
      {/* <HistoryCard
        data={{ group: "AB+", place: "Los Angeles", type: "urgent" }}
      />
      <UserInfo
        data={{ avatar: img, name: "John Doe", status: "Top Rated Donor" }}
      /> */}
      {/* <CheckButton name="Check" changed={() => {}}>Check</CheckButton> */}
      {/* <Select name="age" changed={() => {}} data={[{ title: "One", value: "1" },{ title: "Two", value: "2" }]} /> */}
      {/* <Badge
        badgeContent={
          <Avatar height={25} width={25}>
            9+
          </Avatar>
        }
      >
        <Avatar height={50} width={50} src={img} alt="icon" />
      </Badge>
      <Badge>
        <Avatar height={50} width={50} src={img} alt="icon" />
      </Badge> */}
      {/* <Button
        blocked
        clicked={() => {
          console.log("cliked");
        }}
      >
        Next
      </Button>
      <br />
      <div className="form-group">
        <label id="text">Text</label>
        <Input
          id="text"
          name="text"
          placeholder="Enter the text"
          value={state}
          changed={(e) => {
            setstate(e.target.value);
          }}
          icon={<FiEye />}
        />
      </div>
      <br />
      <Logo />
      <br />
      <DateSlider closeItemNum={2} items={[1, 2, 3, 4, 5]}>
        Date
      </DateSlider> */}
      {/* <ImagePicker changed={(value) => setstate(value)} name="image" value={state} /> */}
      {/* <GenderRadio
        name="gender"
        img={img}
        changed={(e) => {
          console.log(e.target.value);
        }}
        icon={<FaArrowAltCircleUp />}
      >
        Male
      </GenderRadio>

      <GenderRadio
        name="gender"
        img={img}
        changed={(e) => {
          console.log(e.target.value);
        }}
        icon={<FaArrowAltCircleDown />}
      >
        Female
      </GenderRadio>
      <CircleRadio
        name="gender"
        changed={(e) => {
          console.log(e.target.value);
        }}
      >
        AB+
      </CircleRadio>
      <CircleRadio
        name="gender"
        changed={(e) => {
          console.log(e.target.value);
        }}
      >
        )+
      </CircleRadio>
      <Avatar>O+</Avatar> */}
      {/* <RequestCard /> */}
    </div>
  