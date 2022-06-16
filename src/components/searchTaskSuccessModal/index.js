import ModalComponent from "components/modal";
import React from "react";
import goodIcon from "assets/images/good-icon.png";
import closeButton from "assets/images/close-button.png";

const customStyles = {
  content: {
    height: 379,
    width: 418,
    borderRadius: 12,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background:
      " radial-gradient(82.46% 82.46% at 50% 42.89%, rgba(187, 170, 255, 0.65) 0%, rgba(114, 79, 255, 0.65) 100%) ",
  },
};

export default function SearchTaskSuccessModal({ visible, handleClose }) {
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
          <p className="body9 st-success-title">Готово</p>
          <p className="body3">Ваш отклик отправлен заказчику.</p>
        </div>
      </div>
    </ModalComponent>
  );
}
