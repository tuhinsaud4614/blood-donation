import { useReducer, useState } from "react";

import signUpReducer, {
  ABOUT_YOU,
  ADDRESS,
  AGE,
  BLOOD_GROUP,
  CONTACT_INFO,
  GENDER,
  WEIGHT,
} from "./signUpReducer";
import ContractInfo from "./components/ContractInfo";
import BloodGroup from "./components/BloodGroup";
import classes from "./SignUp.module.css";
import Weight from "./components/Weight";
import Gender from "./components/Gender";
import Address from "./components/Address";
import Age from "./components/Age";
import ProfileImage from "./components/ProfileImage";
import AboutYou from "./components/AboutYou";

const init = {
  aboutYou: {
    username: "",
    email: "",
    password: "",
  },
  contactInfo: {
    phone: "",
    altPhone: "",
    socialLink: "",
  },
  bloodGroup: "",
  weight: "",
  gender: "",
  address: {
    street: "",
    city: "",
    postCode: "",
  },
  age: {
    age: "",
    day: "",
    month: "",
  },
  avatar: "",
};

const SignUp = () => {
  const [signUpState, signUpDispatch] = useReducer(signUpReducer, init);
  const [indexState, setIndexState] = useState(1);

  const submitHandler = (i, value) => {
    const newData = {
      ...signUpState,
      avatar: value,
    };
    console.log(newData);
  };

  let element = (
    <AboutYou
      index={1}
      submitted={(i, data) => {
        signUpDispatch({ type: ABOUT_YOU, payload: { ...data } });
        setIndexState(i);
      }}
    />
  );

  switch (indexState) {
    case 1:
      element = (
        <AboutYou
          index={1}
          submitted={(i, data) => {
            signUpDispatch({ type: ABOUT_YOU, payload: { ...data } });
            setIndexState(i);
          }}
        />
      );
      break;
    case 2:
      element = (
        <ContractInfo
          index={2}
          submitted={(i, data) => {
            signUpDispatch({ type: CONTACT_INFO, payload: { ...data } });
            setIndexState(i);
          }}
        />
      );
      break;
    case 3:
      element = (
        <BloodGroup
          index={3}
          submitted={(i, value) => {
            signUpDispatch({ type: BLOOD_GROUP, payload: value });
            setIndexState(i);
          }}
        />
      );
      break;
    case 4:
      element = (
        <Weight
          index={4}
          submitted={(i, value) => {
            signUpDispatch({ type: WEIGHT, payload: value });
            setIndexState(i);
          }}
        />
      );
      break;
    case 5:
      element = (
        <Gender
          index={5}
          submitted={(i, value) => {
            signUpDispatch({ type: GENDER, payload: value });
            setIndexState(i);
          }}
        />
      );
      break;
    case 6:
      element = (
        <Address
          index={6}
          submitted={(i, data) => {
            signUpDispatch({ type: ADDRESS, payload: { ...data } });
            setIndexState(i);
          }}
        />
      );
      break;
    case 7:
      element = (
        <Age
          index={7}
          submitted={(i, data) => {
            signUpDispatch({ type: AGE, payload: { ...data } });
            setIndexState(i);
          }}
        />
      );
      break;
    case 8:
      element = <ProfileImage index={8} submitted={submitHandler} />;
      break;
    default:
      element = (
        <AboutYou
          index={1}
          submitted={(i, data) => {
            signUpDispatch({ type: ABOUT_YOU, payload: { ...data } });
            setIndexState(i);
          }}
        />
      );
      break;
  }

  return (
    <div className={`container ${classes.SignUpContainer}`}>{element}</div>
  );
};

export default SignUp;
