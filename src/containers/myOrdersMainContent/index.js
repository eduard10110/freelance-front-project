import Card from "components/cards/card";
import ClickOnTaskModal from "components/clickOnTaskModal";
import { FIND_TASK_MAIN_CONTENT_FAKE_DATA } from "helpers/constants";
import { findTaskMainContentFilters } from "helpers/enums";
import React, { useState } from "react";

export default function FindTaskMainContent() {
  const [activeFilter, setActiveFilter] = useState(
    findTaskMainContentFilters.byDate
  );

  const handleChangeMainContentFilter = (id) => () => setActiveFilter(id);

  return (
    <div className="my-orders-main-content">
      <div className="main-content-filters-wrapper">
        <p className="body3">Сортировать</p>
        <div className="main-content-filters">
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
      </div>
      <div className="tasks-wrapper">
        {FIND_TASK_MAIN_CONTENT_FAKE_DATA.map((elem, index) => (
          <div className="order-card" key={index}>
            <Card data={elem} />
          </div>
        ))}
      </div>
    </div>
  );
}
