import ModalComponent from "components/modal";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { registrationModalVisible, loginModalVisible } from "store/action-creators/app";
import { showRegistrationModalSelector } from "store/selectors/app";

export default function Registration() {

    const modalVisible = useSelector(showRegistrationModalSelector, shallowEqual);
    const dispatch = useDispatch();

    const handleCloseModalVisible = () => {
        dispatch(registrationModalVisible(false))
    }

    const handleOpenLoginModal = () => {
        dispatch(registrationModalVisible(false))
        dispatch(loginModalVisible(true))
    }

    const customStyles = {
        content: {
            width: "746px",
            height: "648px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: "16px",
            background: "rgb(238, 238, 239, 0.85)",
            // "linear-gradient(109.46deg, rgba(255, 255, 255, 0.77) 1.57%, rgba(255, 255, 255, 0.8) 100%)",
            boxShadow:
                "111px 125px 67px rgba(0, 0, 0, 0.01), 63px 70px 57px rgba(0, 0, 0, 0.05), 28px 31px 42px rgba(0, 0, 0, 0.09), 7px 8px 23px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
        },
    };
    return (
        <ModalComponent
            isOpen={modalVisible}
            customStyles={customStyles}
            onRequestClose={handleCloseModalVisible}
        >
            <div className="reg-modal">
                <div className="reg-title">
                    <h4>Создайте свой профиль</h4>
                    <span onClick={handleCloseModalVisible} role="presentation">
                        <i></i>
                    </span>
                </div>
                <div className="reg-type">
                    <p className="body5" onClick={handleOpenLoginModal}>Вход</p>
                    <p className="body5">Регистрация</p>
                </div>
                <div className="reg-inputs">
                    <label htmlFor="name">
                        <p>Имя</p>
                        <input
                            type="text"
                            className="input body3"
                            placeholder="Иван"
                            id="name"
                        />
                    </label>
                    <label htmlFor="email">
                        <p>Email</p>
                        <input
                            type="text"
                            className="input body3"
                            placeholder="example@gmail.com"
                            id="email"
                        />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input
                            type="password"
                            className="input body3"
                            placeholder="***************"
                            id="password"
                        />
                    </label>
                </div>
                <div className="reg-terms">
                <label class="container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>
                    <p className="body3">Нажимая на кнопку, я соглашаюсь на <span className="body5">обработку персональных данных</span></p>
                </div>
                <div className="reg-actions">
                    <button className="btn btn-default btn-reg body3">
                    Зарегистрироваться
                    </button>
                    <p className="body3">или</p>
                    <button className="btn btn-default btn-reg-google body3">
                        <i></i>Быстрая регистрация через Google
                    </button>
                </div>
            </div>
        </ModalComponent>
    );
}
