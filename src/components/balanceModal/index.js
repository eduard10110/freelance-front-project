import ModalComponent from "components/modal";
import React from "react";

const customStyles = {
  content: {
    width: "320px",
    height: "280px",
    position: "relative",
    top: "20%",
  },
};

export default function BalanceModal({ visible, handleClose }) {
  return (
    <ModalComponent customStyles={customStyles} isOpen={visible}>
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
