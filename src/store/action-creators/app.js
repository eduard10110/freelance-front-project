import { LOGIN_MODAL, REGISTRATION_MODAL, USER_PARAMS } from "store/action-types/app"

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

export const setUserParams = (payload) => {
    return {
        type: USER_PARAMS,
        payload
    }
}