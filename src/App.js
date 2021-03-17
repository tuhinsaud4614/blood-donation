import { useState } from "react";
import { FiEye } from "react-icons/fi";

import Button from "./shared/components/button/Button";
import DateSlider from "./shared/components/date-slider/DateSlider";
import Input from "./shared/components/input/Input";
import Logo from "./shared/components/logo/Logo";

function App() {
  const [state, setstate] = useState("");
  return (
    <div style={{ padding: "10px" }}>
      <Button
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
      </DateSlider>
    </div>
  );
}

export default App;
