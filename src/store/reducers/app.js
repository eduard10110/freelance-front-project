import * as actionTypes from "store/action-types/app";

const initialState = {
  findTaskFromMyOrders: false,
  showLoginModal: false,
  showRegistrationModal: false,
  showChatModal: false,
  notificationsModal: false,
  userParams: {
    auth: false,
  },
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_MODAL: {
      return {
        ...state,
        showLoginModal: payload,
      };
    }
    case actionTypes.REGISTRATION_MODAL: {
      return {
        ...state,
        showRegistrationModal: payload,
      };
    }
    case actionTypes.CHAT_MODAL: {
      return {
        ...state,
        showChatModal: payload,
      };
    }
    case actionTypes.USER_PARAMS: {
      return {
        ...state,
        userParams: payload,
      };
    }
    case actionTypes.NOTIFICATIONS_MODAL: {
      return { ...state, notificationsModal: payload };
    }
    case actionTypes.FIND_TASK_FROM_MY_ORDERS: {
      return { ...state, findTaskFromMyOrders: payload };
    }
    default:
      return state;
  }
}
