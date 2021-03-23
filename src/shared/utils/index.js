export function removeMultiSpace(value) {
  return value.replace(/\s\s+/g, " ");
}

export const REQUIRED = "REQUIRED";
export const MIN_LENGTH = "MIN_LENGTH";
export const MAX_LENGTH = "MAX_LENGTH";
export const IS_EMAIL = "IS_EMAIL";
export const IS_PHONE = "IS_PHONE";
export const IS_URL = "IS_URL";

export function validate(value, validators) {
  let isValid = true;
  for (const validator of validators) {
    if (validator === REQUIRED) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator === MIN_LENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator === MAX_LENGTH) {
      isValid = isValid && value.trim().length < validator.val;
    }

    if (validator === IS_PHONE) {
      isValid =
        isValid && /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/.test(value);
    }

    if (validator === IS_URL) {
      isValid =
        isValid &&
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
          value
        );
    }

    if (validator === IS_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
}

export function setToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key) {
  const stData = localStorage.getItem(key);
  if (stData) {
    try {
      return JSON.parse(stData);
    } catch (e) {
      return null;
    }
  }
  return null;
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
