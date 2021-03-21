import PropTypes from "prop-types";

import { removeMultiSpace, REQUIRED, validate } from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import classes from "../SignUp.module.css";

const Address = ({ index, submitted }) => {
  const [formState, changeFunc] = useForm({
    form: {
      street: {
        value: "",
        valid: false,
      },
      city: {
        value: "",
        valid: false,
      },
      postCode: {
        value: "",
        valid: false,
      },
    },
    formIsValid: false,
  });

  const submitHandler = () => {
    if (formState.formIsValid) {
      submitted(index + 1, {
        street: formState.form.street.value,
        city: formState.form.city.value,
        postCode: formState.form.postCode.value,
      });
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
      title="Where DO You Live?"
      info="Please provide correct address. This information will keep safe."
    >
      <>
        <div className={`form-group pb-2`}>
          <label htmlFor="street">Street Address</label>
          <Input
            value={formState.form.street.value}
            placeholder="123/4, Saint Road"
            type="text"
            name="street"
            id="street"
            changed={changeHandler}
            required
          />
        </div>
        <div className={`form-group pb-2`}>
          <label htmlFor="city">City</label>
          <Input
            value={formState.form.city.value}
            placeholder="Dhaka"
            type="text"
            name="city"
            id="city"
            changed={changeHandler}
            required
          />
        </div>
        <div className={`form-group pb-4`}>
          <label htmlFor="postCode">Postal Code</label>
          <Input
            value={formState.form.postCode.value}
            placeholder="XXXX"
            type="number"
            name="postCode"
            id="postCode"
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

Address.propTypes = {
  index: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
};

export default Address;
