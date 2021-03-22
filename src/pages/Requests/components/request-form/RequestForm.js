import Button from "../../../../shared/components/button/Button";
import Select from "../../../../shared/components/select/Select";
import Input from "../../../../shared/components/input/Input";
import useForm from "../../../../shared/hooks/form-hook";

import classes from "./RequestForm.module.css";

const RequestForm = () => {
  const [formState, changeFunc] = useForm({
    form: {
      area: {
        value: "",
        valid: false,
      },
      bloodGroup: {
        value: "o+",
        valid: true,
      },
      relation: {
        value: "brother",
        valid: true,
      },
      type: {
        value: "scheduled",
        valid: true,
      },
    },
    formIsValid: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const changeHandler = (e) => {
      console.log(e.target.name);
    // const id = e.target.name;
    // const value = removeMultiSpace(e.target.value);
    // if (id.toString() === "email") {
    //   changeFunc(id, value, validate(value, [REQUIRED, IS_EMAIL]));
    // } else {
    //   changeFunc(id, value, validate(value, [{ type: REQUIRED }]));
    // }
  };
  return (
    <div className={`${classes.Form} bx-sh1`}>
      <form onSubmit={submitHandler}>
        <div className={`form-group pb-3`}>
          <label htmlFor="area">Area or City</label>
          <Input
            value={formState.form.area.value}
            placeholder="New York"
            type="text"
            name="area"
            id="area"
            changed={changeHandler}
            required
          />
        </div>
        <div className={`row m-0`}>
          <div className={`form-group pb-3 col-6 pr-4`}>
            <label htmlFor="bloodGroup">Blood Group</label>
            <Select
              name="age"
              changed={changeHandler}
              selectedValue={"o+"}
              data={[
                { title: "A+", value: "a+" },
                { title: "A-", value: "a-" },
                { title: "B+", value: "b-" },
                { title: "B-", value: "b-" },
                { title: "O+", value: "o+" },
                { title: "O-", value: "o-" },
                { title: "AB+", value: "ab-" },
                { title: "AB-", value: "ab-" },
              ]}
            />
          </div>
          <div className={`form-group p-0 pb-3 col-6`}>
            <label htmlFor="relation">I am his/her</label>
            <Select
              name="relation"
              changed={changeHandler}
              selectedValue={"brother"}
              data={[
                { title: "Father", value: "father" },
                { title: "Mother", value: "mother" },
                { title: "Sister", value: "sister" },
                { title: "Brother", value: "brother" },
                { title: "Uncle", value: "uncle" },
                { title: "Aunt", value: "aunt" },
                { title: "Other", value: "other" },
              ]}
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={!formState.formIsValid}
          blocked
          className={`${classes.Button}`}
        >
          Publish
        </Button>
      </form>
    </div>
  );
};

export default RequestForm;
