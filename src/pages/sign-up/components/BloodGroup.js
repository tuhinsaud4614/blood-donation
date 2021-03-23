import PropTypes from "prop-types";

import { removeMultiSpace, REQUIRED, validate } from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import CircleRadio from "../../../shared/components/radio-button/CircleRadio";
import classes from "../SignUp.module.css";
import Button from "../../../shared/components/button/Button";

const BloodGroup = ({ index, submitted }) => {
  const [formState, changeFunc] = useForm({
    form: {
      bloodGroup: {
        value: "a+",
        valid: true,
      },
    },
    formIsValid: true,
  });

  const submitHandler = () => {
    if (formState.formIsValid) {
      submitted(index + 1, formState.form.bloodGroup.value);
    }
  };

  const changeHandler = (e) => {
    const id = e.target.name;
    const value = removeMultiSpace(e.target.value);
    changeFunc(id, value, validate(value, [REQUIRED]));
  };
  // console.log(formState);
  return (
    <SignUpContainer
      title="What is your blood group"
      info="Your blood group need to be accurate. If you don't know about it please contact nearest clinic."
    >
      <>
        <div className={`${classes.BloodGroup} py-3`}>
          <div className={`${classes.BloodGroupCol}`}>
            <CircleRadio
              name="bloodGroup"
              value="a+"
              changed={changeHandler}
              defaultChecked
            >
              A+
            </CircleRadio>
            <CircleRadio name="bloodGroup" value="a-" changed={changeHandler}>
              A-
            </CircleRadio>
            <CircleRadio name="bloodGroup" value="b+" changed={changeHandler}>
              B+
            </CircleRadio>
          </div>

          <div className={`${classes.BloodGroupCol}`}>
            <CircleRadio name="bloodGroup" value="b-" changed={changeHandler}>
              B-
            </CircleRadio>
            <CircleRadio name="bloodGroup" value="o+" changed={changeHandler}>
              O+
            </CircleRadio>
            <CircleRadio name="bloodGroup" value="o-" changed={changeHandler}>
              O-
            </CircleRadio>
          </div>
          <div className={`${classes.BloodGroupCol}`}>
            <CircleRadio name="bloodGroup" value="ab+" changed={changeHandler}>
              AB+
            </CircleRadio>
            <CircleRadio name="bloodGroup" value="ab-" changed={changeHandler}>
              AB-
            </CircleRadio>
            <div
              style={{ width: "40px", height: "40px", color: "transparent" }}
            />
          </div>
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

BloodGroup.propTypes = {
  index: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
};

export default BloodGroup;
