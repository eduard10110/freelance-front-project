import React, { useState } from "react";
import chatPreview from "../../assets/images/chat-preview-image.png";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { CHAT_MEMBERS_FAKE_DATA } from "../../helpers/constants";

export default function ChatMessageMobile({
    selectedMember,
    setSelectedMember,
}) {
    const [emojiVisible, setEmojiVisible] = useState(false);

    const handleCloseMessage = () => {
        setSelectedMember(null);
    };

    const handleEmojiVisible = () => {
        setEmojiVisible(!emojiVisible);
    };

    const currentMember = CHAT_MEMBERS_FAKE_DATA.find(
        (data) => data.id === selectedMember,
    );

    return (
        <div className="mobile-chat-message-wrapper">
            {!selectedMember ? (
                <div className="chat-preview">
                    <div>
                        <img src={chatPreview} alt="chat" />
                    </div>
                    <h4>Выберите, кому хотели бы написать</h4>
                </div>
            ) : (
                <div className="mobile-chat-message-content">
                    {/* CHAT HEAD */}
                    <div className="mobile-chat-person">
                            <span
                                className="close-chat-message"
                                onClick={handleCloseMessage}
                                role="presentation"
                            >
                                <i></i>
                            </span>
                            <div>
                                {currentMember && (
                                    <img
                                        src={require(`../../assets/images/members/${currentMember.image}`)}
                                        alt="avatar"
                                    />
                                )}
                                <span>
                                    {currentMember && currentMember.name}
                                </span>
                            </div>
                        </div>
                    <div className="mobile-chat-message-head">
                        
                        <div className="person-response">
                            <p className="body3">
                                Пользователь оставил отклик к вашему заданию
                            </p>
                            <p className="body5">
                                «Ремонт мойки из искусственного камня»
                            </p>
                        </div>
                        <div className="person-action">
                            <button className="btn btn-purple-filled body3">
                                Выбрать исполнителем
                            </button>
                        </div>
                    </div>
                    <div className="chat-messages">
                        <div className="self-message">
                            <p className="body3">
                                Здравствуйте ! Хотел бы более подробно узнать о
                                Вашем проекте)
                            </p>
                            <span className="body4">Сегодня, 12:01</span>
                        </div>
                        <div className="incoming-message">
                            <p className="body3">Здравствуйте!</p>
                            <span className="body4">Сегодня, 12:02</span>
                        </div>
                    </div>
                    <div className="mobile-chat-message-footer">
                        <div className="chat-upload">
                            <label htmlFor="upload">
                                <i></i>
                                <input type="file" id="upload" />
                            </label>
                        </div>
                        <div
                            className="chat-emoji"
                            onBlur={() => setEmojiVisible(false)}
                        >
                            <div
                                className="emoji-icon"
                                onClick={handleEmojiVisible}
                                role="presentation"
                            >
                                <i></i>
                            </div>
                            {emojiVisible && (
                                <div className="emoji-content">
                                    <Picker
                                        // onEmojiClick={onEmojiClick}
                                        disableAutoFocus={true}
                                        skinTone={SKIN_TONE_MEDIUM_DARK}
                                        groupNames={{
                                            smileys_people: "PEOPLE",
                                        }}
                                        native
                                    />
                                </div>
                            )}
                        </div>
                        <div className="chat-input">
                            <input type="text" className="input" />
                            <i></i>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
