import PersonalCard from "components/cards/personalCard";
import CategoriesCheckbox from "components/categoriesChackbox";
import { checkboxFakeData } from "helpers/constants";

import React, { useState } from "react";

const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
];

export default function Performers() {
    const [filters, setFilters] = useState({
        fastFilter: "rating",
        categoriesCheckbox: [],
    });

    const handleCategoriesCheckboxChange = (state) =>
        setFilters({ ...filters, categoriesCheckbox: state });

    const handleFastFilter = (type) => () => {
        setFilters({ ...filters, fastFilter: type });
    };

    return (
        <div className="performers-wrapper page-wrapper">
            <div className="content-wrapper">
                <h2>Исполнители</h2>
                <div className="performers-sorting">
                    <p className="body3">Сортировать</p>
                    <button
                        className={`body3 btn-default btn-td-underline ${
                            filters.fastFilter === "rating"
                                ? "btn-default-active"
                                : ""
                        }`}
                        onClick={handleFastFilter("rating")}
                    >
                        По рейтингу
                    </button>
                    <button
                        className={`body3 btn-default btn-td-underline ${
                            filters.fastFilter === "taskCount"
                                ? "btn-default-active"
                                : ""
                        }`}
                        onClick={handleFastFilter("taskCount")}
                    >
                        По количеству выполненных заданий
                    </button>
                </div>
                <div className="performers-content">
                    <div className="performers-content-items">
                        <p className="body2 performers-content-title">Разработка ПО</p>
                        <div className="performers-task-card">
                          {cards.map(card => (
                              <PersonalCard key={card.id} id={card.id} />
                          ))}
                        </div>
                    </div>
                    <div className="performers-checkbox-filter">
                      <CategoriesCheckbox
                          state={filters.categoriesCheckbox}
                          setState={handleCategoriesCheckboxChange}
                          data={checkboxFakeData}
                      />
                    </div>
                </div>
            </div>
        </div>
    );
}
