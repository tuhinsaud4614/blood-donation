import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";

import {
  IS_EMAIL,
  removeMultiSpace,
  REQUIRED,
  validate,
} from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import classes from "../SignUp.module.css";

const AboutYou = ({ index, submitted }) => {
  const [formState, changeFunc] = useForm({
    form: {
      username: {
        value: "",
        valid: false,
      },
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
    },
    formIsValid: false,
  });

  const submitHandler = () => {
    if (formState.formIsValid) {
      submitted(index + 1, {
        username: formState.form.username.value,
        email: formState.form.email.value,
        password: formState.form.password.value,
      });
    }
  };

  const changeHandler = (e) => {
    const id = e.target.name;
    const value = removeMultiSpace(e.target.value);
    if (id.toString() === "username") {
      changeFunc(id, value, validate(value, [REQUIRED]));
    } else if (id.toString() === "email") {
      changeFunc(id, value, validate(value, [REQUIRED, IS_EMAIL]));
    } else if (id.toString() === "password") {
      if (value !== "") {
        changeFunc(id, value, validate(value, [REQUIRED]));
      } else {
        changeFunc(id, value, true);
      }
    }
  };
  // console.log(formState);
  return (
    <SignUpContainer
      title="Let Us Know About You"
      info="Provide your real name for your identity. Your name will be used for search"
    >
      <>
        <div className={`form-group pb-2`}>
          <label htmlFor="username">Username</label>
          <Input
            value={formState.form.username.value}
            placeholder="johndoe"
            type="text"
            name="username"
            id="username"
            changed={changeHandler}
            required
          />
        </div>
        <div className={`form-group pb-2`}>
          <label htmlFor="email">Email</label>
          <Input
            value={formState.form.email.value}
            placeholder="johndoe@gmail.com"
            type="email"
            name="email"
            id="email"
            changed={changeHandler}
            required
          />
        </div>
        <div className={`form-group pb-4`}>
          <label htmlFor="password">Password</label>
          <Input
            icon={<FaEye />}
            value={formState.form.password.value}
            placeholder="*****"
            type="password"
            name="password"
            id="password"
            changed={changeHandler}
          />
        </div>
        <Button
          type="button"
          disabled={!formState.formIsValid}
          blocked
          clicked={submitHandler}
          className={`${classes.Button}`}
        >
          Next
        </Button>
      </>
    </SignUpContainer>
  );
};

AboutYou.propTypes = {
  index: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
};

export default AboutYou;
