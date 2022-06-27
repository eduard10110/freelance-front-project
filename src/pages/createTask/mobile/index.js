import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";
import locationIcon from "assets/images/find-task-filters-location-icon.png";

export default function CreateTaskMobile() {
  const navigate = useNavigate();
  const [inputsData, setInputsData] = useState({
    budgetFromFreelancer: false,
    radioButtonValue: "remoteWork",
  });

  const handleChange = (id, payload) => () =>
    setInputsData({ ...inputsData, [id]: payload });

  const handleSubmit = () => {
    navigate(routes.CREATE_TASK_SUCCESS);
  };

  const handleRadioButtonChange = (id) => (e) => {
    setInputsData({ ...inputsData, radioButtonValue: id });
  };

  const checkRadioButtonsState = (id) => id === inputsData.radioButtonValue;

  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper-mobile ctm-wrapper">
          <h4 className="ctm-header">Создать задние</h4>
          <h5 className="ctm-description body3">
            Мы поможем найти исполнителя для вашего задания
          </h5>
          <div className="ctm-task-name">
            <p className="body2">Название задания</p>
            <input
              className="input"
              placeholder="Например, сделать сайт интернет-магазина"
            />
          </div>
          <div className="ctm-category-wrapper">
            <p className="body2">Категория</p>
            <select className="input body3" defaultValue={"placeholder"}>
              <option value="placeholder" disabled>
                Выбрать категорию
              </option>
              <option className="body3">Грузоперевозки</option>
              <option className="body3">Дизайн</option>
              <option className="body3">Компьютерная помощь</option>
              <option className="body3">Красота и здоровье</option>
              <option className="body3">Курьерские услуги</option>
              <option className="body3">Ремонт и строительство</option>
              <option className="body3">Ремонт транспорта</option>
              <option className="body3">Репетиторы и обучение</option>
              <option className="body3">Уборка и помощь по хозяйству</option>
              <option className="body3">Установка и ремонт техники</option>
              <option className="body3">
                Юридическая и бухгалтерская помощь
              </option>
            </select>
          </div>
          <div className="ctm-subCategory-wrapper">
            <p className="body2">Подкатегория</p>
            <select className="input">
              <option value="" disabled selected>
                Выбрать подкатегорию
              </option>
            </select>
          </div>
          <div className="ctm-address-input-wrapper">
            <p className="body2">Место оказания услуги</p>
            <div className="create-task-checkbox-wrapper create-task-checkbox-wrapper-first">
              <input
                type="radio"
                checked={checkRadioButtonsState("remoteWork")}
                onChange={handleRadioButtonChange("remoteWork")}
              />
              <label className="create-task-checkbox-label">
                Можно выполнить удаленно
              </label>
            </div>
            <div className="create-task-checkbox-wrapper">
              <input
                type="radio"
                checked={checkRadioButtonsState("onCurrentAddress")}
                onChange={handleRadioButtonChange("onCurrentAddress")}
              />
              <label className="create-task-checkbox-label">
                Нужно присутствие по адресу
              </label>
            </div>
          </div>
          <div className="ctm-category-wrapper">
            <p className="body2">По какому адресу?</p>
            <div className="input-wrapper">
              <input className="input" placeholder="Город, улица, дом" />
              <img
                src={locationIcon}
                alt="locationIcon"
                className="create-task-location-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
