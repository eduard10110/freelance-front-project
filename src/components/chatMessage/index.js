import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { chatModalVisible } from "store/action-creators/app";
import Anton from "../../assets/images/members/Anton.png";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

export default function ChatMessage() {
    const [emojiVisible, setEmojiVisible] = useState(false);
    const dispatch = useDispatch();

    const handleCloseChat = () => {
        dispatch(chatModalVisible(false));
    };

    const handleEmojiVisible = () => {
        setEmojiVisible(!emojiVisible);
    };

    return (
        <div className="chat-message-wrapper">
            <span
                className="close-chat"
                onClick={handleCloseChat}
                role="presentation"
            >
                <i></i>
            </span>
            <div className="chat-message-content">
                {/* CHAT HEAD */}
                <div className="chat-message-head">
                    <div className="chat-person">
                        <img src={Anton} />
                        <span>Антон Афонин</span>
                    </div>
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
                <div className="chat-message-footer">
                    <div className="chat-upload">
                        <label htmlFor="upload">
                            <i></i>
                            <input type="file" id="upload" />
                        </label>
                    </div>
                    <div className="chat-emoji" onBlur={() => setEmojiVisible(false)}>
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
                                    groupNames={{ smileys_people: "PEOPLE" }}
                                    native
                                />
                            </div>
                        )}
                    </div>
                    <div className="chat-input">
                        <input type="text" className="input"/>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
