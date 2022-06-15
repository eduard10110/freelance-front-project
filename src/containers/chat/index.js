import ChatMembers from "components/chatMembers";
import ChatMessage from "components/chatMessage";
import ModalComponent from "components/modal";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loginModalVisible, setUserParams } from "store/action-creators/app";
import { showChatModal } from "store/selectors/app";

export default function Chat() {
    const [selectedMember, setSelectedMember] = useState(null);
    const modalVisible = useSelector(showChatModal, shallowEqual);
    const dispatch = useDispatch();

    const handleCloseModalVisible = () => {
        dispatch(loginModalVisible(false));
    };

    const customStyles = {
        content: {
            maxWidth: "1192px",
            minHeight: "731px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            padding: "none",
            position: "relative",
            borderRadius: "16px",
            background: "rgb(238, 238, 239, 0.92)",
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
            <div className="chat-wrapper">
                <ChatMembers setSelectedMember={setSelectedMember}/>
                <ChatMessage selectedMember={selectedMember}/>
            </div>
        </ModalComponent>
    );
}
