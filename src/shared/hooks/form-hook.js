import { useReducer, useCallback } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      let formIsValid = true;
      for (const name in state.form) {
        if (name === action.name) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.form[name].valid;
        }
      }
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: {
            value: action.value,
            valid: action.isValid,
          },
        },
        formIsValid: formIsValid,
      };
    case "SET_DATA":
      return {
        ...action.newState,
      };
    default:
      return state;
  }
}

function useForm(initialState) {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "CHANGE",
      value: value,
      name: id,
      isValid: isValid,
    });
  }, []);

  const setData = useCallback((newState) => {}, []);
  return [formState, changeHandler, setData];
}

export default useForm;
