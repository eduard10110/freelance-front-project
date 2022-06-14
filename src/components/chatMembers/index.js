import React from "react";
import chatPerformers from "../../assets/images/chat-performers.png";
import chatCustomers from "../../assets/images/chat-customers.png";
import { CHAT_MEMBERS_FAKE_DATA } from "../../helpers/constants";

export default function ChatMembers() {

    return (
        <div className="chat-members-wrapper">
            <div className="find-member">
                <input
                    type="text"
                    placeholder="Введите имя для общения"
                    className="input body3"
                />
            </div>
            <div className="chat-groupes">
                <div className="group-title body3">Группы</div>
                <div className="chat-performers">
                    <img src={chatPerformers} alt="Исполнители" />
                    <span className="body8">Исполнители</span>
                </div>
                <div className="chat-customers">
                    <img src={chatCustomers} alt="Заказчики" />
                    <span className="body8">Заказчики</span>
                </div>
            </div>
            <div className="chat-members">
            <div className="members-title body3">Заказчики</div>
                {CHAT_MEMBERS_FAKE_DATA.map((member) => (
                    <div className="chat-member" key={member.id}>
                        <div>
                            <img src={require(`../../assets/images/members/${member.image}`)} alt="avatar" />
                        </div>
                        <div className="member-info">
                            <p className="body8">{member.name}</p>
                            <p className="body3">{member.description}</p>
                        </div>
                        <span>
                          <i></i>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
