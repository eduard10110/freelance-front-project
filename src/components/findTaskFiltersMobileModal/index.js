import Checkbox from "components/checkbox";
import ModalComponent from "components/modal";
import React, { useState } from "react";
import locationIcon from "assets/images/find-task-filters-location-icon.png";
import CategoriesCheckbox from "components/categoriesChackbox";
import { checkboxFakeData } from "helpers/constants";

const customStyles = {
  content: {
    width: "100%",
    height: "100%",
    top: "10%",
    left: "0%",
    position: "relative",
    padding: "30px 0 80px 0",
  },
};

export default function FindTaskFiltersMobileModal({
  open,
  data,
  onCancel,
  setFiltersData,
}) {
  const [filtersState, setFiltersState] = useState({ ...data });

  const handleSubmit = () =>
    setFiltersData({ open: false, data: filtersState });

  const handleChange = (id, payload) => (e) => {
    setFiltersState({ ...filtersState, [id]: payload || e.target.value });
  };
  const handleCategoriesCheckboxChange = (state) =>
    setFiltersState({ ...filtersState, categoriesCheckbox: state });
  return (
    <ModalComponent
      isOpen={open}
      onRequestClose={onCancel(false)}
      customStyles={customStyles}
    >
      <div className="filters-checkbox-item">
        <Checkbox
          handleCheckboxChange={handleChange}
          checked={filtersState.remoteWork}
          id="remoteWork"
          label="Удалённая работа"
        />
      </div>
      <div className="filters-checkbox-item">
        <Checkbox
          handleCheckboxChange={handleChange}
          checked={filtersState.tasksWithoutResponses}
          id="tasksWithoutResponses"
          label="Задания без откликов"
        />
      </div>
      <div className="filters-checkbox-item">
        <Checkbox
          handleCheckboxChange={handleChange}
          checked={filtersState.onlyVacancies}
          id="onlyVacancies"
          label="Только вакансии"
        />
      </div>
      <div className="mobile-location-input-wrapper">
        <input
          className="input"
          placeholder="Город, улица, дом"
          value={filtersState.homeSearchValue}
          onChange={handleChange("homeSearchValue")}
        />
        <img
          src={locationIcon}
          alt="locationIcon"
          className="location-icon-container"
        />
      </div>
      <input
        className="input mobile-search-radius-input"
        placeholder="Радиус поиска"
        value={filtersState.radiusSearchValue}
        onChange={handleChange("radiusSearchValue")}
      />
      <input
        className="input mobile-search-radius-input"
        placeholder="Бюджет ₽"
        onChange={handleChange("budgetSearchValue")}
        value={filtersState.budgetSearchValue}
      />
      <CategoriesCheckbox
        state={filtersState.categoriesCheckbox}
        setState={handleCategoriesCheckboxChange}
        data={checkboxFakeData}
      />
      <div className="ftm-buttons-wrapper">
        <button onClick={onCancel(false)} className="btn btn-purple">
          Отменить
        </button>
        <button onClick={handleSubmit} className="btn btn-purple-filled">
          Применить
        </button>
      </div>
    </ModalComponent>
  );
}
