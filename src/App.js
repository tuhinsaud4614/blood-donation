import { useState } from "react";
// import GenderRadio from "./shared/components/radio-button/GenderRadio";
import img from "./assets/img/user2.jpg";
import ProfileBadge from "./pages/profile/components/profile-badge/ProfileBadge";
import ProfileCard from "./pages/profile/components/profile-card/ProfileCard";

import Avatar from "./shared/components/avatar/Avatar";
import Badge from "./shared/components/badge/Badge";
import CheckButton from "./shared/components/check-button/CheckButton";
import UserInfo from "./shared/components/navigation/user-info/UserInfo";
import Select from "./shared/components/select/Select";
import Carousel from "./shared/components/carousel/Carousel";

function App() {
  const [state, setstate] = useState("");
  return (
    <div style={{ padding: "10px" }}>
      <Carousel
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
      />
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
  );
}

export default App;
