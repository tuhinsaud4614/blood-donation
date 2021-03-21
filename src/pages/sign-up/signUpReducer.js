export const ABOUT_YOU = "ABOUT_YOU";
export const CONTACT_INFO = "CONTACT_INFO";
export const BLOOD_GROUP = "BLOOD_GROUP";
export const WEIGHT = "WEIGHT";
export const GENDER = "GENDER";
export const ADDRESS = "ADDRESS";
export const AGE = "AGE";

export default function signUpReducer(state, action) {
  switch (action.type) {
    case ABOUT_YOU:
      return {
        ...state,
        aboutYou: {
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case CONTACT_INFO:
      return {
        ...state,
        contactInfo: {
          phone: action.payload.phone,
          altPhone: action.payload.altPhone,
          socialLink: action.payload.socialLink,
        },
      };
    case BLOOD_GROUP:
      return {
        ...state,
        bloodGroup: action.payload,
      };
    case WEIGHT:
      return {
        ...state,
        weight: action.payload,
      };
    case GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case ADDRESS:
      return {
        ...state,
        address: {
          street: action.payload.street,
          city: action.payload.city,
          postCode: action.payload.postCode,
        },
      };
    case AGE:
      return {
        ...state,
        age: {
          age: action.payload.age,
          day: action.payload.day,
          month: action.payload.month,
        },
      };
    default:
      return state;
  }
}
