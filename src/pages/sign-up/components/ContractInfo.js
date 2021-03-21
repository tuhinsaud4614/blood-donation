import {
  IS_PHONE,
  IS_URL,
  removeMultiSpace,
  REQUIRED,
  validate,
} from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import classes from "../SignUp.module.css";

const ContractInfo = () => {
  const [formState, changeFunc] = useForm({
    form: {
      phone: {
        value: "",
        valid: false,
      },
      altPhone: {
        value: "",
        valid: false,
      },
      socialLink: {
        value: "",
        valid: true,
      },
    },
    formIsValid: false,
  });

  const submitHandler = (e) => {
    //   e.preventDefault();
    console.log("submitted");
  };

  const changeHandler = (e) => {
    const id = e.target.name;
    const value = removeMultiSpace(e.target.value);
    if (id.toString() === "phone") {
      changeFunc(id, value, validate(value, [REQUIRED, IS_PHONE]));
    } else if (id.toString() === "altPhone") {
      changeFunc(id, value, validate(value, [REQUIRED, IS_PHONE]));
    } else if (id.toString() === "socialLink") {
      if (value !== "") {
        changeFunc(id, value, validate(value, [IS_URL]));
      } else {
        changeFunc(id, value, true);
      }
    }
  };
  console.log(formState);
  return (
    <SignUpContainer
      title="Contract Information"
      info="Please provide correct phone no. This information will keep safe."
    >
      <>
        <div className={`form-group pb-2`}>
          <label htmlFor="phone">Phone No</label>
          <Input
            value={formState.form.phone.value}
            placeholder="018"
            type="text"
            name="phone"
            id="phone"
            changed={changeHandler}
            required
          />
        </div>
        <div className={`form-group pb-2`}>
          <label htmlFor="altPhone">Alternative Phone No</label>
          <Input
            value={formState.form.altPhone.value}
            placeholder="017"
            type="text"
            name="altPhone"
            id="altPhone"
            changed={changeHandler}
            required
          />
        </div>
        <div className={`form-group pb-4`}>
          <label htmlFor="socialLink">Social(Optional)</label>
          <Input
            value={formState.form.socialLink.value}
            placeholder="https://"
            type="url"
            name="socialLink"
            id="socialLink"
            changed={changeHandler}
          />
        </div>
        <Button
          type="submit"
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

export default ContractInfo;
