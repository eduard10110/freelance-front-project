import Checkbox from "components/checkbox";
import React, { useState } from "react";
import locationIcon from "assets/images/find-task-filters-location-icon.png";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

export default function CreateTask() {
  const navigate = useNavigate();
  const [inputsData, setInputsData] = useState({
    remoteCheckbox: false,
    onCurrentAddressCheckbox: false,
    budgetFromFreelancer: false,
  });

  const handleChange = (id, payload) => () =>
    setInputsData({ ...inputsData, [id]: payload });

  const handleSubmit = () => {
    navigate(routes.CREATE_TASK_SUCCESS);
  };

  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper create-task-page-wrapper">
          <h2>Создать задние</h2>
          <h4>Мы поможем найти исполнителя для вашего задания</h4>
          <div className="create-task-task-name">
            <p className="body2">Название задания</p>
            <input
              className="input"
              placeholder="Например, сделать сайт интернет-магазина"
            />
          </div>
          <div className="category-input-wrapper">
            <div>
              <p className="body2">Категория</p>
              <input placeholder="Выбрать категорию" className="input" />
            </div>
            <div>
              <p className="body2">Подкатегория</p>
              <input placeholder="Выбрать подкатегорию" className="input" />
            </div>
          </div>
          <div className="create-task-address-input-wrapper">
            <p className="body2">Место оказания услуги</p>
            <div className="create-task-checkbox-wrapper create-task-checkbox-wrapper-first">
              <Checkbox
                labelClassName="create-task-checkbox-label"
                id="remoteCheckbox"
                checked={inputsData.remoteCheckbox}
                label="Можно выполнить удаленно"
                handleCheckboxChange={handleChange}
              />
            </div>
            <div className="create-task-checkbox-wrapper">
              <Checkbox
                labelClassName="create-task-checkbox-label"
                id="onCurrentAddressCheckbox"
                checked={inputsData.onCurrentAddressCheckbox}
                handleCheckboxChange={handleChange}
                label="Нужно присутствие по адресу"
              />
            </div>
          </div>
          <div className="create-task-address-info-wrapper">
            <p className="body2">По какому адресу?</p>
            <div className="input-wrapper">
              <input
                className="input create-task-address-input"
                placeholder="Город, улица, дом"
              />
              <img
                src={locationIcon}
                alt="locationIcon"
                className="create-task-location-icon"
              />
            </div>
          </div>
          <div className="create-task-date-inputs-wrapper">
            <div className="create-task-date-inputs-wrapper-inner">
              <p className="body2">Начало</p>
              <input className="input" type="date" />
            </div>
            <div className="create-task-date-to-input-wrapper">
              <p className="body2">Конец</p>
              <input className="input" type="date" />
            </div>
          </div>
          <div className="create-task-budget-input-wrapper">
            <p className="body2">Бюджет</p>
            <input
              className="input"
              placeholder="На какой бюджет вы расчитываете?"
            />
          </div>
          <div className="create-task-checkbox-wrapper create-task-checkbox-wrapper-first">
            <Checkbox
              labelClassName="create-task-checkbox-label"
              id="budgetFromFreelancer"
              checked={inputsData.budgetFromFreelancer}
              label="Не могу оценить стоимость заказа. Жду предложений от исполнителей."
              handleCheckboxChange={handleChange}
            />
          </div>
          <div className="create-task-task-description-wrapper">
            <p className="body2">Подробное описание</p>
            <textarea className="input" placeholder="Введите текст" />
          </div>
          <button className="btn-default body3 upload-image-button">
            Добавить фото
          </button>
          <button
            onClick={handleSubmit}
            className="btn btn-purple-filled body3"
          >
            Создать задание
          </button>
        </div>
      </div>
    </div>
  );
}
