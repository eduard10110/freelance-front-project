import filterIcon from "assets/images/icons/filter-icon.png";
import FindTaskFiltersMobileModal from "components/findTaskFiltersMobileModal";
import CardMobile from "components/mobile/cards/card";
import { FIND_TASK_MAIN_CONTENT_FAKE_DATA } from "helpers/constants";
import { findTaskMainContentFilters } from "helpers/enums";
import React, { useState } from "react";

export default function FindTaskMobile() {
  const [activeFilter, setActiveFilter] = useState(
    findTaskMainContentFilters.byDate
  );

  const [filtersData, setFiltersData] = useState({
    open: false,
    data: {
      remoteWork: false,
      tasksWithoutResponses: false,
      onlyVacancies: false,
      searchValue: "",
      homeSearchValue: "",
      radiusSearchValue: "",
      budgetSearchValue: "",
      categoriesCheckbox: [],
    },
  });

  const handleFiltersModalChange = (payload) => () =>
    setFiltersData({ ...filtersData, open: payload });

  const handleChange = (id, payload) => (e) => {
    setFiltersData({
      ...filtersData,
      data: { ...filtersData, [id]: payload || e.target.value },
    });
  };

  const handleChangeMainContentFilter = (id) => () => setActiveFilter(id);

  return (
    <>
      {filtersData.open && (
        <FindTaskFiltersMobileModal
          onCancel={handleFiltersModalChange}
          setFiltersData={setFiltersData}
          {...filtersData}
        />
      )}
      <div className="page-wrapper">
        <div className="page">
          <div className="content-wrapper-mobile ftm-wrapper">
            <div className="ftm-header-wrapper">
              <div className="ftm-search-wrapper">
                <input
                  className="input ftm-search-task-input"
                  placeholder="Поиск по ключевым словам"
                  value={filtersData.data.searchValue}
                  onChange={handleChange("searchValue")}
                />
                <button className="btn btn-purple-filled">Найти</button>
              </div>
              <img
                src={filterIcon}
                alt="filterIcon"
                className="findTask-filter-icon cursor-pointer"
                onClick={handleFiltersModalChange(true)}
              />
            </div>
            <div className="ftm-main-content-filters">
              <p className="body3">Сортировать</p>
              <button
                onClick={handleChangeMainContentFilter(
                  findTaskMainContentFilters.byDate
                )}
                className={`btn-default ${
                  activeFilter === findTaskMainContentFilters.byDate &&
                  "btn-default-active"
                } btn-td-underline`}
              >
                По дате публиции
              </button>
              <button
                onClick={handleChangeMainContentFilter(
                  findTaskMainContentFilters.byUrgency
                )}
                className={`btn-default btn-td-underline ${
                  activeFilter === findTaskMainContentFilters.byUrgency &&
                  "btn-default-active"
                }`}
              >
                По срочности
              </button>
            </div>
            <div className="tasks-wrapper">
              {FIND_TASK_MAIN_CONTENT_FAKE_DATA.map((elem, index) => (
                <div className="ftm-task-card" key={index}>
                  <CardMobile data={elem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
