import ChatMembers from "components/chatMembers";
import ChatMembersMobile from "components/chatMembersMobile";
import ChatMessage from "components/chatMessage";
import ChatMessageMobile from "components/chatMessageMobile";
import ModalComponent from "components/modal";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loginModalVisible } from "store/action-creators/app";
import { showChatModal } from "store/selectors/app";

export default function MobileChat() {
    const [selectedMember, setSelectedMember] = useState(null);
    const modalVisible = useSelector(showChatModal, shallowEqual);
    const dispatch = useDispatch();

    const handleCloseModalVisible = () => {
        dispatch(loginModalVisible(false));
    };

    const customStyles = {
        content: {
            width: "100%",
            height: "100%",
            top: "0",
            left: "0%",
            position: "relative",
            padding: "30px 0 80px 0",
        },
    };
    return (
        <ModalComponent
            isOpen={modalVisible}
            customStyles={customStyles}
            onRequestClose={handleCloseModalVisible}
        >
            <div className="mobile-chat-wrapper">
                {selectedMember ? (
                    <ChatMessageMobile
                        selectedMember={selectedMember}
                        setSelectedMember={setSelectedMember}
                    />
                ) : (
                    <ChatMembersMobile setSelectedMember={setSelectedMember} />
                )}
            </div>
        </ModalComponent>
    );
}
