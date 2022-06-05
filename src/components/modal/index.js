import React from "react";
import Modal from "react-modal";

export default function ModalComponent({ children, isOpen, customStyles }) {
    
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={isOpen}
            style={customStyles}
            // contentLabel="Example Modal"
        >
            {children}
        </Modal>
    );
}
