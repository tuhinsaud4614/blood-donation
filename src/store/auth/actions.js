import axios from "axios";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../shared/utils";

import routes from "../../shared/utils/routes";

import {
  AUTH_ACTION_REMOVE_ERROR,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_PENDING,
  AUTH_ACTION_SIGN_IN,
  AUTH_ACTION_SIGN_OUT,
  AUTH_ACTION_SIGN_UP,
} from "./types";

export function signOut() {
  removeFromLocalStorage("userData");
  return {
    type: AUTH_ACTION_SIGN_OUT,
  };
}

export function signIn(email, password, push) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_ACTION_PENDING,
    });
    try {
      const res = await axios.get(
        "https://blood-donations-2a42d-default-rtdb.firebaseio.com/users.json"
      );
      let found = null;
      let id = null;

      if (res.data) {
        for (const key in res.data) {
          if (res.data[key].aboutYou.email === email) {
            found = res.data[key];
            id = key;
          }
        }
        if (found) {
          if (found.aboutYou.password === password) {
            setToLocalStorage("userData", {
              id: id,
              username: found.aboutYou.username,
              email: found.aboutYou.email,
              avatar: found.avatar,
            });
            dispatch({
              type: AUTH_ACTION_SIGN_IN,
              user: {
                id: id,
                username: found.aboutYou.username,
                email: found.aboutYou.email,
                avatar: found.avatar,
              },
            });
            push(routes.request);
          } else {
            dispatch({
              type: AUTH_ACTION_ERROR,
              error: "password not match",
            });
          }
        } else {
          dispatch({
            type: AUTH_ACTION_ERROR,
            error: "User Not Exist",
          });
        }
      } else {
        dispatch({
          type: AUTH_ACTION_ERROR,
          error: "User Not Exist",
        });
      }
    } catch (e) {
      //   console.log("Sign up Error", e);
      dispatch({
        type: AUTH_ACTION_ERROR,
        error: "Something went wrong",
      });
    }
  };
}

export function signUp(userInfo, push) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_ACTION_PENDING,
    });
    // console.log(userInfo);
    try {
      const res = await axios.get(
        "https://blood-donations-2a42d-default-rtdb.firebaseio.com/users.json"
      );
      let found = false;

      if (res.data) {
        for (const key in res.data) {
          if (res.data[key].aboutYou.email === userInfo.aboutYou.email) {
            found = true;
          }
        }
      }
      if (found) {
        dispatch({
          type: AUTH_ACTION_ERROR,
          error: "User Already Exist",
        });
      } else {
        await axios.post(
          "https://blood-donations-2a42d-default-rtdb.firebaseio.com/users.json",
          userInfo
        );
        dispatch({
          type: AUTH_ACTION_SIGN_UP,
        });

        // push(routes.signIn);
      }
    } catch (e) {
      //   console.log("Sign up Error", e);
      dispatch({
        type: AUTH_ACTION_ERROR,
        error: "Something went wrong",
      });
    }
  };
}

export function autoSignIn() {
  return (dispatch) => {
    const localData = getFromLocalStorage("userData");
    if (localData && localData.email) {
      dispatch({
        type: AUTH_ACTION_SIGN_IN,
        user: localData,
      });
    } else {
      dispatch(signOut());
    }
  };
}

export function removeError() {
  return { type: AUTH_ACTION_REMOVE_ERROR };
}
