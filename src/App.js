import { useState } from "react";
import GenderRadio from "./shared/components/radio-button/GenderRadio";
import img from "./assets/img/blood-logo.svg";
import CircleRadio from "./shared/components/radio-button/CircleRadio";
// import ImagePicker from "./shared/components/image-picker/ImagePicker";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

// import Button from "./shared/components/button/Button";
// import DateSlider from "./shared/components/date-slider/DateSlider";
// import Input from "./shared/components/input/Input";
// import Logo from "./shared/components/logo/Logo";

function App() {
  const [state, setstate] = useState("");
  return (
    <div style={{ padding: "10px" }}>
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
      <GenderRadio
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
    </div>
  );
}

export default App;
