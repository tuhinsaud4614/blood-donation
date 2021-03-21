import ContractInfo from "./components/ContractInfo";
import BloodGroup from "./components/BloodGroup";
import classes from "./SignUp.module.css";
import Weight from "./components/Weight";
import Gender from "./components/Gender";

const SignUp = () => {
  return (
    <div className={`container ${classes.SignUpContainer}`}>
      {/* <ContractInfo /> */}
      {/* <BloodGroup /> */}
      {/* <Weight /> */}
      <Gender />
    </div>
  );
};

export default SignUp;
