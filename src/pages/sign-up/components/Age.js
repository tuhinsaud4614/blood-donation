import PropTypes from "prop-types";

// import { removeMultiSpace} from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import classes from "../SignUp.module.css";
import Button from "../../../shared/components/button/Button";
import DateSlider from "../../../shared/components/date-slider/DateSlider";

const Age = ({ index, submitted }) => {
  const [formState, changeFunc] = useForm({
    form: {
      age: {
        value: "18",
        valid: true,
      },
      day: {
        value: "1",
        valid: true,
      },
      month: {
        value: "jan",
        valid: true,
      },
    },
    formIsValid: true,
  });

  const submitHandler = () => {
    if (formState.formIsValid) {
      const temp = {
        age: formState.form.age.value,
        day: formState.form.day.value,
        month: formState.form.month.value,
      };
      submitted(index + 1, temp);
    }
  };

  const changeHandler = (name, value) => {
    const id = name;
    changeFunc(id, value, true);
  };
  // console.log(formState);
  return (
    <SignUpContainer
      title="How Old Are You"
      info="Correct birth date give you best experience with the community, Don't hide it."
    >
      <>
        <p className={`${classes.AgeText}`}>I am</p>
        <div className={`${classes.AgeContainer} pb-4`}>
          <DateSlider
            name="age"
            changed={changeHandler}
            closeItemNum={2}
            items={Array.from({ length: 53 }, (_, i) => (i + 18).toString())}
          >
            Years Old
          </DateSlider>
          <DateSlider
            name="day"
            changed={changeHandler}
            closeItemNum={2}
            items={Array.from({ length: 31 }, (_, i) => (i + 1).toString())}
          >
            Date
          </DateSlider>
          <DateSlider
            name="month"
            changed={changeHandler}
            closeItemNum={1}
            items={[
              "jan",
              "feb",
              "mar",
              "apr",
              "may",
              "jun",
              "jul",
              "aug",
              "sep",
              "oct",
              "nov",
              "dec",
            ]}
          >
            Month
          </DateSlider>
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

Age.propTypes = {
  index: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
};

export default Age;
