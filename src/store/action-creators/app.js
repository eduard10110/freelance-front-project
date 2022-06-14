import * as actionTypes from "store/action-types/app"

export const loginModalVisible = (payload) => {
    return {
        type: actionTypes.LOGIN_MODAL,
        payload
    }
}
export const registrationModalVisible = (payload) => {
    return {
        type: actionTypes.REGISTRATION_MODAL,
        payload
    }
}
export const chatModalVisible = (payload) => {
    return {
        type: actionTypes.CHAT_MODAL,
        payload
    }
}

export const setUserParams = (payload) => {
    return {
        type: actionTypes.USER_PARAMS,
        payload
    }
}