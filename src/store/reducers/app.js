import {
  LOGIN_MODAL,
  NOTIFICATIONS_MODAL,
  REGISTRATION_MODAL,
  USER_PARAMS,
} from "store/action-types/app";

const initialState = {
  showLoginModal: false,
  showRegistrationModal: false,
  notificationsModal: false,
  userParams: {
    auth: false,
  },
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_MODAL: {
      return {
        ...state,
        showLoginModal: payload,
      };
    }
    case REGISTRATION_MODAL: {
      return {
        ...state,
        showRegistrationModal: payload,
      };
    }
    case USER_PARAMS: {
      return {
        ...state,
        userParams: payload,
      };
    }
    case NOTIFICATIONS_MODAL: {
      return { ...state, notificationsModal: payload };
    }
    default:
      return state;
  }
}
