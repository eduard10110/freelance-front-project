import React from "react";
import Modal from "react-modal";

export default function ModalComponent({ children, isOpen, customStyles, onRequestClose }) {
    
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={onRequestClose}
            style={customStyles}
            // contentLabel="Example Modal"
        >
            {children}
        </Modal>
    );
}
