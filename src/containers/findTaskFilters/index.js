import React from "react";
import PropTypes from "prop-types";
import Checkbox from "components/checkbox";
import locationIcon from "assets/images/find-task-filters-location-icon.png";

export default function FindTaskFilters({ filtersState, setFiltersState }) {
  const handleChange = (id, payload) => (e) => {
    setFiltersState({ ...filtersState, [id]: payload || e.target.value });
  };

  return (
    <div className="filters-wrapper">
      <div className="search-wrapper">
        <input
          className="input search-task-input"
          placeholder="Поиск по ключевым словам"
          value={filtersState.searchValue}
          onChange={handleChange("searchValue")}
        />
        <button className="btn btn-purple-filled">Найти</button>
      </div>
      <div className="search-wrapper">
        <div className="input-wrapper">
          <input
            className="input home-search-input"
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
          className="input search-radius-input"
          placeholder="Радиус поиска"
          value={filtersState.radiusSearchValue}
          onChange={handleChange("radiusSearchValue")}
        />
        <input
          className="input budget-input"
          placeholder="Бюджет ₽"
          onChange={handleChange("budgetSearchValue")}
          value={filtersState.budgetSearchValue}
        />
      </div>
      <div className="filters-checkboxes-wrapper">
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
        <div className="filters-checkbox-item"></div>
        <div className="filters-checkbox-item"></div>
      </div>
    </div>
  );
}

FindTaskFilters.propTypes = {
  filtersState: PropTypes.object.isRequired,
  setFiltersState: PropTypes.func.isRequired,
};
