import PropTypes from "prop-types";

import { REQUIRED, validate } from "../../../shared/utils";
import useForm from "../../../shared/hooks/form-hook";
import SignUpContainer from "./SignUpContainer";
import Button from "../../../shared/components/button/Button";
import ImagePicker from "../../../shared/components/image-picker/ImagePicker";
import classes from "../SignUp.module.css";

const ProfileImage = ({ index, submitted }) => {
  const [formState, changeFunc] = useForm({
    form: {
      avatar: {
        value: "",
        valid: false,
      },
    },
    formIsValid: false,
  });

  const submitHandler = () => {
    if (formState.formIsValid) {
      submitted(index + 1, formState.form.avatar.value);
    }
  };

  const changeHandler = (name, value) => {
    const id = name;
    changeFunc(id, value, validate(value, [REQUIRED]));
  };
  // console.log(formState);
  return (
    <SignUpContainer
      formClass={`${classes.WeightForm}`}
      title="You're Almost Done"
      info="Please do not use a model or doll. Please keep faith on yourself you're beautiful too"
    >
      <>
        <div className={`${classes.AgeContainer} py-4 my-4`}>
          <ImagePicker
            name="avatar"
            value={formState.form.avatar.value}
            changed={changeHandler}
            required
          />
        </div>
        <Button
          type="button"
          disabled={!formState.formIsValid}
          blocked
          clicked={submitHandler}
          className={`${classes.Button} mt-4`}
        >
          Start Journey
        </Button>
      </>
    </SignUpContainer>
  );
};

ProfileImage.propTypes = {
  index: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
};

export default ProfileImage;
