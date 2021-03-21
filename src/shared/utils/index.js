export function removeMultiSpace(value) {
  return value.replace(/\s\s+/g, " ");
}

export const REQUIRED = "REQUIRED";
export const MIN_LENGTH = "MIN_LENGTH";
export const MAX_LENGTH = "MAX_LENGTH";
export const IS_EMAIL = "IS_EMAIL";

export function validate(value, validators) {
  let isValid = true;
  for (const validator of validators) {
    if (validator === "REQUIRED") {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator === "MIN_LENGTH") {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator === "MAX_LENGTH") {
      isValid = isValid && value.trim().length < validator.val;
    }

    if (validator === "IS_EMAIL") {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
}
