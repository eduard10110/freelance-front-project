import {
  LOGIN_MODAL,
  NOTIFICATIONS_MODAL,
  REGISTRATION_MODAL,
  USER_PARAMS,
} from "store/action-types/app";

export const loginModalVisible = (payload) => ({
  type: LOGIN_MODAL,
  payload,
});
export const registrationModalVisible = (payload) => ({
  type: REGISTRATION_MODAL,
  payload,
});

export const setUserParams = (payload) => ({
  type: USER_PARAMS,
  payload,
});

export const notificationsModalVisible = (payload) => ({
  type: NOTIFICATIONS_MODAL,
  payload,
});
