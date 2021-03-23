import { getFromLocalStorage } from "../../shared/utils";
import {
  AUTH_ACTION_AUTO_SIGN_IN,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_PENDING,
  AUTH_ACTION_SIGN_IN,
  AUTH_ACTION_SIGN_OUT,
  AUTH_ACTION_SIGN_UP,
  AUTH_ACTION_REMOVE_ERROR,
} from "./types";

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    avatar: "",
  },
  loading: false,
  errors: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.error,
      };
    case AUTH_ACTION_SIGN_UP:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case AUTH_ACTION_SIGN_OUT:
      return {
        user: {
          id: "",
          name: "",
          email: "",
          avatar: "",
        },
        loading: false,
        errors: null,
      };
    case AUTH_ACTION_SIGN_IN:
      return {
        user: { ...action.user },
        loading: false,
        errors: null,
      };
    case AUTH_ACTION_AUTO_SIGN_IN:
      const data = getFromLocalStorage("userData");
      if (data) {
        return {
          user: data,
          loading: false,
          errors: null,
        };
      }
      return state;
    case AUTH_ACTION_REMOVE_ERROR:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
}

export default reducer;
