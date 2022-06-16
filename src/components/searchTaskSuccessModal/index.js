import ModalComponent from "components/modal";
import React from "react";
import goodIcon from "assets/images/good-icon.png";
import closeButton from "assets/images/close-button.png";

export default function SearchTaskSuccessModal({
  visible,
  handleClose,
  background,
  width,
  height,
  withButton,
}) {
  const customStyles = {
    content: {
      height: height || 379,
      width: width || 418,
      borderRadius: 12,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background:
        background ||
        "radial-gradient(82.46% 82.46% at 50% 42.89%, rgba(187, 170, 255, 0.65) 0%, rgba(114, 79, 255, 0.65) 100%) ",
    },
  };
  return (
    <ModalComponent
      customStyles={customStyles}
      isOpen={visible}
      onRequestClose={handleClose}
    >
      <div className="st-success-modal-wrapper">
        <img
          onClick={handleClose}
          className="st-close-button"
          src={closeButton}
          alt="close"
          role="button"
        />
        <div className="st-success-modal-inner">
          <img src={goodIcon} alt="good" />
          <p
            style={{ color: withButton ? "black" : "white" }}
            className="body9 st-success-title"
          >
            Готово
          </p>
          <p
            style={{ color: withButton ? "black" : "white" }}
            className="body3"
          >
            Ваш отклик отправлен заказчику.
          </p>
          {withButton && (
            <button className="btn btn-purple-filled body3">
              Вернуться на главную
            </button>
          )}
        </div>
      </div>
    </ModalComponent>
  );
}
