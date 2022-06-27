import PersonalCardMobile from "components/mobile/cards/personalCard";
import React, { useState } from "react";
import filterIcon from "assets/images/icons/filter-icon.png";
import PerformersFiltersModal from "components/mobile/performersFiltersModal";

const cards = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function PerformersMobile() {
  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const [filters, setFilters] = useState({
    fastFilter: "rating",
    categoriesCheckbox: [],
  });

  const handleFastFilter = (type) => () => {
    setFilters({ ...filters, fastFilter: type });
  };

  const handleOpenFiltersModal = (payload) => () =>
    setFiltersModalOpened(payload);

  return (
    <>
      {filtersModalOpened && (
        <PerformersFiltersModal
          visible={filtersModalOpened}
          handleClose={handleOpenFiltersModal}
          data={filters}
          setData={setFilters}
        />
      )}
      <div className="page-wrapper">
        <div className="page">
          <div className="content-wrapper-mobile pm-wrapper">
            <h4>Исполнители</h4>
            <div className="pm-main-content-filters">
              <p className="body3">Сортировать</p>
              <div className="pm-filters-buttons-wrapper">
                <button
                  onClick={handleFastFilter("rating")}
                  className={`btn-default btn-td-underline ${
                    filters.fastFilter === "rating" ? "btn-default-active" : ""
                  }`}
                >
                  По рейтингу
                </button>
                <button
                  onClick={handleFastFilter("taskCount")}
                  className={`btn-default btn-td-underline ${
                    filters.fastFilter === "taskCount"
                      ? "btn-default-active"
                      : ""
                  }`}
                >
                  По количеству выполненных заданий
                </button>
              </div>
            </div>
            <div className="performers-content-items">
              <div className="pm-content-title-wrapper">
                <p className="body2 pm-content-title">Разработка ПО</p>
                <img
                  src={filterIcon}
                  alt="filterIcon"
                  className="findTask-filter-icon cursor-pointer"
                  onClick={handleOpenFiltersModal(true)}
                />
              </div>
              <div className="performers-task-card pm-task-card">
                {cards.map((card) => (
                  <PersonalCardMobile key={card.id} id={card.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
