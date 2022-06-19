import React from "react";

export default function TaskCardActionModal({ handleModalVisible }) {
    return (
        <div className="task-card-modal">
            <span className="close-task-modal" onClick={handleModalVisible(false)} role="presentation">
                <i></i>
            </span>
            <div className="task-card-modal-title">
                <p className="body10">Отклик скрыт.</p>
                <p className="body10">Почему он вам не подошел?</p>
            </div>
            <div className="task-card-modal-inputs">
                <label htmlFor="price" className="body3">
                    <input type="radio" name="hide-task" id="price" />
                    Высокая цена
                </label>
                <label htmlFor="feedback" className="body3">
                    <input type="radio" name="hide-task" id="feedback" />У
                    исполнителя мало отзывов
                </label>
                <label htmlFor="task" className="body3">
                    <input type="radio" name="hide-task" id="task" />
                    Не соответствует заданию
                </label>
                <label htmlFor="company" className="body3">
                    <input type="radio" name="hide-task" id="company" />
                    Не рассматриваю компании
                </label>
                <label htmlFor="another" className="body3">
                    <input type="radio" name="hide-task" id="another" />
                    Что-то другое
                </label>
            </div>
            <div className="task-card-modal-description">
                <input
                    type="text"
                    className="input body3"
                    placeholder="Укажите причину скрытия отклика"
                />
            </div>
            <div className="task-card-complete">
                <button className="btn btn-purple-filled" onClick={handleModalVisible(false)}>Готово</button>
                <p className="body4">
                    <span>Отклик скрыт и находится в конце списка,</span>
                    <span>но вы всегда можете к нему вернуться.</span>
                </p>
            </div>
        </div>
    );
}
