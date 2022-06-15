import ModalComponent from "components/modal";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { showNotificationsModalSelector } from "store/selectors/app";
import closeButtonIcon from "assets/images/close-button.png";
import { notificationsModalVisible } from "store/action-creators/app";

const customStyles = {
  content: {
    width: 552,
    height: 508,
    top: "37%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 12,
    padding: 32,
    boxShadow:
      "7px 8px 23px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
    border: "none",
    background: "#ebeaed",
  },
};

export default function Notifications() {
  const visible = useSelector(showNotificationsModalSelector, shallowEqual);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(notificationsModalVisible(false));

  return (
    <ModalComponent isOpen={visible} customStyles={customStyles}>
      <div className="notifications-modal-header-wrapper">
        <p className="body1">Уведомления</p>
        <img
          role="button"
          onClick={handleClose}
          src={closeButtonIcon}
          alt="close-button"
        />
      </div>
      <div className="notifications-item-wrapper">
        <p className="body3">Onlinejobx support</p>
        <div>
          <p className="body4">Lorem ipsum dolor sit amet, consectetur...</p>
          <p className="body4">10.12</p>
        </div>
      </div>
      <div className="notifications-item-wrapper">
        <p className="body3">Lee Williamson</p>
        <div>
          <p className="body4">Lee Williamson</p>
          <p className="body4">8.12</p>
        </div>
      </div>
      <div className="notifications-item-wrapper">
        <p className="body3">Ronald Mccoy</p>
        <div>
          <p className="body4">Lorem ipsum dolor sit amet, consectetur...</p>
          <p className="body4">5.12</p>
        </div>
      </div>
      <div className="notifications-item-wrapper">
        <p className="body3">Albert Bell</p>
        <div>
          <p className="body4">Lorem ipsum dolor sit amet, consectetur...</p>
          <p className="body4">28.11</p>
        </div>
      </div>
      <div className="notifications-modal">
        <button className="body3 btn-default btn-td-underline">
          Отметить все как прочитанные
        </button>
        <button className="body3 btn-default btn-td-underline">
          Показать еще
        </button>
      </div>
    </ModalComponent>
  );
}
