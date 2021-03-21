import PropTypes from "prop-types";

import { removeMultiSpace } from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import ImageRadio from "../../../shared/components/radio-button/ImageRadio";
import Button from "../../../shared/components/button/Button";
import maleImg from "../../../assets/img/male.png";
import femaleImg from "../../../assets/img/female.png";
import classes from "../SignUp.module.css";

const Gender = ({ index, submitted }) => {
  const [formState, changeFunc] = useForm({
    form: {
      gender: {
        value: "male",
        valid: true,
      },
    },
    formIsValid: true,
  });

  const submitHandler = () => {
    if (formState.formIsValid) {
      submitted(index + 1, formState.form.gender.value);
    }
  };

  const changeHandler = (e) => {
    const id = e.target.name;
    const value = removeMultiSpace(e.target.value);
    changeFunc(id, value, true);
  };
  // console.log(formState);
  return (
    <SignUpContainer
      formClass={`${classes.WeightForm}`}
      title="What is your Gender"
      info="defining your gender will us know bring new features for mothers health care."
    >
      <>
        <div className={`${classes.Weight}`}>
          <ImageRadio
            name="gender"
            value="male"
            changed={changeHandler}
            img={maleImg}
            defaultChecked
          >
            {"Male"}
          </ImageRadio>
          <ImageRadio
            name="gender"
            value="female"
            changed={changeHandler}
            img={femaleImg}
          >
            {"Female"}
          </ImageRadio>
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

Gender.propTypes = {
  index: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
};

export default Gender;
