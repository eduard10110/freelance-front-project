/* eslint-disable react-hooks/exhaustive-deps */
import { FIND_TASK_MAIN_CONTENT_FAKE_DATA } from "helpers/constants";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ordererPicture from "assets/images/find-task-orderer-picture.png";

//the data must be dynamic
export default function SelectedTask() {
  const [currentTaskData, setCurrentTaskData] = useState();
  const { taskId } = useParams();
  useEffect(() => {
    const currentData = FIND_TASK_MAIN_CONTENT_FAKE_DATA.find(
      (elem) => elem.id === +taskId
    );
    if (currentData) {
      setCurrentTaskData(currentData);
    }
  }, []);
  console.log(currentTaskData);
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper selectedTask-container-wrapper">
          <div className="selectedTask-header">
            <h3>Установить сантехнику</h3>
            <p className="body4">Задание № 9941868</p>
          </div>
          <p className="body1">до 10 000 руб.</p>
          <div className="task-info-wrapper">
            <p className="body4">Открыто</p>
            <p className="body4">1 просмотр</p>
            <p className="body4">Создано 1 ч. 20 мин. назад</p>
            <p className="body4">Сантехнические работы</p>
          </div>
          <div className="orderer-wrapper">
            <p className="body1">Заказчик</p>
            <div className="orderer-info">
              <img
                src={ordererPicture}
                alt={ordererPicture}
                className="orderer-picture"
              />
              <div className="personal-info-wrapper">
                <div className="personal-info-wrapper-inner">
                  <p className="body1 btn-td-underline">Иван И.</p>
                  <p className="body3 personal-info">36 лет, Санкт-Петербург</p>
                </div>
                <p className="btn-td-underline cursor-pointer body3">
                  Отзывы: 12
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
