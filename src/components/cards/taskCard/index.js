import React, { useState } from "react";
import taskCardPerformer from "assets/images/task-card-performer.png";
import ModalComponent from "components/modal";
import TaskCardActionModal from "components/taskCardActionModal";

export default function TaskCard() {

    const [modalVisible, setModalVisible] = useState(false);


    const customStyles = {
        content: {
            width: "593px",
            height: "551px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: "16px",
            background: "#e7e7e7",
                // "linear-gradient(109.46deg, rgba(255, 255, 255, 0.77) 1.57%, rgba(255, 255, 255, 0.8) 100%)",
            boxShadow:
                "111px 125px 67px rgba(0, 0, 0, 0.01), 63px 70px 57px rgba(0, 0, 0, 0.05), 28px 31px 42px rgba(0, 0, 0, 0.09), 7px 8px 23px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(18.4988px)",
        },
    };

    const handleModalVisible = (bool) => () => {
        setModalVisible(bool)
    }

    return (
        <div className="task-card">
            <div className="task-card-wrapper">
                <div className="task-performer-info">
                    <div className="task-performer-image">
                        <img src={taskCardPerformer} />
                    </div>
                    <div className="task-performer-work-info">
                        <h4 className="body1">Антон А.</h4>
                        <p className="body4 task-performer-rating">
                            Рейтинг исполнителя:{" "}
                            <span>
                                <i></i>4.9
                            </span>
                        </p>
                        <p className="body4">
                            Выполнил <span>295</span> заданий
                        </p>
                        <p className="body5">
                            Отзывы: <span>12</span>
                        </p>
                    </div>
                </div>
                <p className="task-price body8">Стоимость 8 000 ₽</p>
                <div className="task-performer-description">
                    <p className="body3">
                        Здравствуйте! Готов выполнить ваш заказ!
                    </p>
                    <p className="body3">
                        Качественно и с гарантией выполню работы по замене и
                        монтаже водопровода , отопления и канализации,
                        сантехники и электрики , опыт работы в данной сфере 19
                        лет . Работаю сам , без подсобников и подмастерьев,
                        соответственно и всю ответственность за выполненную мною
                        работу несу сам лично.
                    </p>
                </div>
                <div className="task-performer-action">
                    <button className="btn btn-purple-filled body3">
                        Выбрать исполнителем
                    </button>
                    <p className="body4">
                        Выберите исполнителя, чтобы потом оставить отзыв о
                        работе.
                    </p>
                </div>
            </div>
            <div className="task-card-actions">
                <div>
                    <p className="body5">Пожаловаться</p>
                    <p className="body5" onClick={handleModalVisible(true)} role="presentation">Скрыть отклик</p>
                </div>
                <p className="body4">
                    <span>2</span> <span>марта</span>
                </p>
            </div>
            <ModalComponent
                isOpen={modalVisible}
                customStyles={customStyles}
                onRequestClose={handleModalVisible(false)}
            >
                <TaskCardActionModal handleModalVisible={handleModalVisible}/>
            </ModalComponent>
        </div>
    );
}
