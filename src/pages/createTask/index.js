import Checkbox from "components/checkbox";
import React, { useState } from "react";
import locationIcon from "assets/images/find-task-filters-location-icon.png";

export default function CreateTask() {
  const [inputsData, setInputsData] = useState({
    remoteCheckbox: false,
    onCurrentAddressCheckbox: false,
  });

  const handleChange = (id, payload) => () =>
    setInputsData({ ...inputsData, [id]: payload });

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
          <div className="create-task-budget-info-wrapper">
            <p className="body2">По какому адресу?</p>
            <div className="input-wrapper">
              <input
                className="input create-task-budget-input"
                placeholder="Город, улица, дом"
              />
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
