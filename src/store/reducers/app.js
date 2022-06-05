import { LOGIN_MODAL, REGISTRATION_MODAL } from "store/action-types/app";

const initialState = {
  showLoginModal: false,
  showRegistrationModal: false,
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_MODAL: {
      return {
        ...state,
        showLoginModal: payload
      }
    }
    case REGISTRATION_MODAL: {
      return {
        ...state,
        showRegistrationModal: payload
      }
    }
    default:
      return state;
  }
}
