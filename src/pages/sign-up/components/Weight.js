import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import PropTypes from "prop-types";

import { removeMultiSpace } from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import ImageRadio from "../../../shared/components/radio-button/ImageRadio";
import Button from "../../../shared/components/button/Button";
import img from "../../../assets/img/weight.png";
import classes from "../SignUp.module.css";

const Weight = ({ index, submitted }) => {
  const [formState, changeFunc] = useForm({
    form: {
      weight: {
        value: "49",
        valid: true,
      },
    },
    formIsValid: true,
  });

  const submitHandler = () => {
    if (formState.formIsValid) {
      submitted(index + 1, formState.form.weight.value);
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
      title="How Much Do You Weight"
      info="Note: you cant not donate blood if you're under weight. Minimum weight for donation required 50kg"
    >
      <>
        <div className={`${classes.Weight}`}>
          <ImageRadio
            name="weight"
            value="49"
            icon={<FaArrowAltCircleUp />}
            changed={changeHandler}
            img={img}
            defaultChecked
          >
            {"< 50 KG"}
          </ImageRadio>
          <ImageRadio
            name="weight"
            value="51"
            icon={<FaArrowAltCircleDown />}
            changed={changeHandler}
            img={img}
          >
            {"> 50 KG"}
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

Weight.propTypes = {
  index: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
};

export default Weight;
