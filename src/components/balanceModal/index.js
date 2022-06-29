import ModalComponent from "components/modal";
import React from "react";

const customStyles = {
  content: {
    width: "100%",
    height: "300px",
    position: "relative",
    top: "20%",
    left: 0,
    padding: 0,
  },
};

export default function BalanceModal({ visible, handleClose }) {
  return (
    <ModalComponent
      onRequestClose={handleClose(false)}
      customStyles={customStyles}
      isOpen={visible}
    >
      <div className="header-mobile-currency-dropdown hm-currency-dropdown">
        <p className="body3">На какую сумму хотите пополнить кошелёк?</p>
        <span className="body">
          * — Порядок выплаты, ограничения и полные условия определены в оферте.
        </span>
        <input className="currency-input" placeholder="1000" />
        <button className="btn btn-purple-filled">Пополнить</button>
      </div>
    </ModalComponent>
  );
}
