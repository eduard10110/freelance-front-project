import { LOGIN_MODAL, REGISTRATION_MODAL } from "store/action-types/app"

export const loginModalVisible = (payload) => {
    return {
        type: LOGIN_MODAL,
        payload
    }
}
export const registrationModalVisible = (payload) => {
    return {
        type: REGISTRATION_MODAL,
        payload
    }
}