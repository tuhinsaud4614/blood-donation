import { useState } from "react";
// import GenderRadio from "./shared/components/radio-button/GenderRadio";
import img from "./assets/img/blood-logo.svg";
import RequestCard from "./pages/Requests/components/request-card/RequestCard";
// import CircleRadio from "./shared/components/radio-button/CircleRadio";
// import ImagePicker from "./shared/components/image-picker/ImagePicker";
// import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import Avatar from "./shared/components/avatar/Avatar";
import Badge from "./shared/components/badge/Badge";
import CheckButton from "./shared/components/check-button/CheckButton";
import Select from "./shared/components/select/Select";

// import Button from "./shared/components/button/Button";
// import DateSlider from "./shared/components/date-slider/DateSlider";
// import Input from "./shared/components/input/Input";
// import Logo from "./shared/components/logo/Logo";

function App() {
  const [state, setstate] = useState("");
  return (
    <div style={{ padding: "10px" }}>
      <CheckButton name="Check" changed={() => {}}>Check</CheckButton>
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
