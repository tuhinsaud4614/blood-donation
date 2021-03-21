import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

import {
  IS_EMAIL,
  removeMultiSpace,
  REQUIRED,
  validate,
} from "../../shared/utils";
import useForm from "../../shared/hooks/form-hook";
import routes from "../../shared/utils/routes";
import Logo from "../../shared/components/logo/Logo";
import Button from "../../shared/components/button/Button";
import Input from "../../shared/components/input/Input";
import classes from "./SignIn.module.css";

const SignIn = () => {
  const [formState, changeFunc] = useForm({
    form: {
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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const changeHandler = (e) => {
    const id = e.target.name;
    const value = removeMultiSpace(e.target.value);
    if (id.toString() === "email") {
        
      changeFunc(id, value, validate(value, [REQUIRED, IS_EMAIL]));
    } else {
      changeFunc(id, value, validate(value, [{ type: REQUIRED }]));
    }
  };
  console.log(formState);
  return (
    <div className={`container ${classes.SignInContainer}`}>
      <div className={`row m-0 align-items-md-center w-100`}>
        <section className={`col-12 col-md-6`}>
          <Logo customClass={`${classes.Logo}`} />
        </section>
        {/* Form start */}
        <section className={`col-12 col-md-6 ${classes.Form}`}>
          <h1>sign in</h1>
          <form onSubmit={submitHandler}>
            <div className={`form-group pb-4`}>
              <label htmlFor="email">Email or Username</label>
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
                value={formState.form.password.value}
                placeholder="****"
                type="password"
                name="password"
                id="password"
                icon={<FaEye />}
                changed={changeHandler}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={!formState.formIsValid}
              blocked
              className={`${classes.Button}`}
            >
              Login
            </Button>
          </form>
          <div className={`${classes.FormExtra}`}>
            <Link to={routes.signIn}>Forgot Password?</Link>
            <p className={`${classes.Alt}`}>
              Don't have an account?
              <Link to={routes.signUp}>Sign Up</Link>
            </p>
          </div>
        </section>
        {/* Form end */}
      </div>
    </div>
  );
};

export default SignIn;
