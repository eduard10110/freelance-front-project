import React from "react";
import taskImage from "assets/images/task-image.png";

export default function FindTaskTaskInfoCard({ data }) {
  return (
    <div className="find-task-task-info-card-wrapper">
      <div className="task-info-card-item">
        <div className="task-info-card-item-title task-info-card-item-title-first">
          <p className="body3">Адрес</p>
        </div>
        <div className="task-info-card-item-description task-info-card-item-description-first">
          <p>{data?.address}</p>
        </div>
      </div>
      <div className="task-info-card-item">
        <div className="task-info-card-item-title">
          <p className="body3">Срок</p>
        </div>
        <div className="task-info-card-item-description">
          <p>
            {data?.dateFrom} - {data?.dateTo}
          </p>
        </div>
      </div>
      <div className="task-info-card-item">
        <div className="task-info-card-item-title">
          <p className="body3">Бюджет</p>
        </div>
        <div className="task-info-card-item-description">
          <p>{data?.budget}</p>
        </div>
      </div>
      <div className="task-info-card-item">
        <div className="task-info-card-item-title">
          <p className="body3">Оплата задания</p>
        </div>
        <div className="task-info-card-item-description">
          <p>Банковской картой</p>
        </div>
      </div>
      <div className="task-info-card-item task-info-card-item-last">
        <div className="task-info-card-item-title task-info-card-item-title-last">
          <p className="body3">Нужно</p>
        </div>
        <div className="task-info-card-item-description task-info-card-item-description-last">
          <p>
            Поменять трубы, подключить/установить стиральную машинку и
            установить/подключить раковину и смеситель в ванной. Cдвинуть
            унитаз, установить вытяжку-вентилятор для ванной установить обратно
            все панели. Предлагайте свою цену, рассмотрю все варианты.
          </p>
          <img src={taskImage} alt="taskImage" />
        </div>
      </div>
    </div>
  );
}
