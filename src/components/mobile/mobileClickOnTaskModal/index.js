import ModalComponent from "components/modal";
import React, { useState } from "react";
import ordererPicture from "assets/images/find-task-orderer-picture.png";
import closeButtonIcon from "assets/images/close-button.png";
import SearchTaskSuccessModal from "components/searchTaskSuccessModal";

const customStyles = {
  content: {
    width: "100%",
    minHeight: 700,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 12,
    boxShadow:
      "7px 8px 23px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
    border: "none",
    background: "#ebeaed",
    padding: "15px",
  },
};

//the data must be dynamic
export default function MobileClickOnTaskModal({ isOpen, data, handleClose }) {
  const [successModalOpened, setSuccessModalOpened] = useState(false);
  const [inputsValue, setInputsValue] = useState({
    comment: "",
    budget: "",
  });

  const handleChange = (id) => (e) =>
    setInputsValue({ ...inputsValue, [id]: e.target.value });

  const handleCloseSuccessModal = () => setSuccessModalOpened(false);

  const handleOpenSuccessModal = () => {
    setSuccessModalOpened(true);
  };

  const handleSubmit = () => {
    handleOpenSuccessModal();
  };

  return successModalOpened ? (
    <SearchTaskSuccessModal
      visible={successModalOpened}
      handleClose={handleCloseSuccessModal}
    />
  ) : (
    <ModalComponent isOpen={isOpen} customStyles={customStyles}>
      <img
        onClick={handleClose}
        src={closeButtonIcon}
        alt="close-button"
        className="close-button"
        role="button"
      />
      <div className="mobile-click-on-task-modal-wrapper">
        <div className="modal-task-reviews-wrapper-moble">
          <p className="body">Задание № 9698543</p>
          <p className="body">72 просмотра</p>
          <p className="body">Сантехнические работы</p>
        </div>
        <div className="modal-task-info-wrapper">
          <div className="modal-userInfo-wrapper">
            <div>
                <img
                className="modal-orderer-picture"
                src={ordererPicture}
                alt="ordererImage"
                />
            </div>
            <div>
                <p className="body1 modal-task-orderer-name">Иван Иванов</p>
                <p className="body3 btn-td-underline">Отзывы: 28</p>
            </div>
          </div>
          <div className="modal-task-info-wrapper-inner-mobile">
            <p className="body2">Установить сантехнику</p>
            <p className="body3 modal-task-description">
              Поменять трубы, подключить/установить стиральную машинку и
              установить/подключить раковину и смеситель в ванной. Cдвинуть
              унитаз, установить вытяжку-вентилятор для ванной установить
              обратно все панели. Предлагайте свою цену, рассмотрю все варианты.
            </p>
            <p className="body3">Бюджет — до 10 000 ₽</p>
            <p className="body3">улица Глазунова, 6, Казань</p>
            <div className="comment-input-wrapper">
              <p className="body2">Описание отклика</p>
              <input
                className="input modal-task-comment-input body3"
                placeholder="Введите текст"
                value={inputsValue.comment}
                onChange={handleChange("comment")}
              />
            </div>
            <div className="budget-input-wrapper">
              <p className="body2">Стоимость вашей работы</p>
              <p className="body3 modal-budget-info">10 000 ₽</p>
            </div>
            <div className="total-cost-wrapper">
              <p className="body2">Итоговая стоимость </p>
              <p className="body2">9 950 ₽</p>
            </div>
                <p className="total-cost-description body4">
                С учетом комиссии Onlinejobx
                </p>
            <div className="conclusion">
                <button
                onClick={handleSubmit}
                className="btn btn-purple-filled modal-task-click-button"
                >
                Откликнуться
                </button>
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  );
}
