import CategoriesCheckbox from "components/categoriesChackbox";
import FindTaskFilters from "containers/findTaskFilters";
import FindTaskMainContent from "containers/findTaskMainContent";
import { checkboxFakeData } from "helpers/constants";
import React, { useState } from "react";

export default function FindTask() {
  const [filters, setFilters] = useState({
    remoteWork: false,
    tasksWithoutResponses: false,
    onlyVacancies: false,
    searchValue: "",
    homeSearchValue: "",
    radiusSearchValue: "",
    budgetSearchValue: "",
    categoriesCheckbox: [],
  });
  const handleCategoriesCheckboxChange = (state) =>
    setFilters({ ...filters, categoriesCheckbox: state });
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper find-task-page-wrapper">
          <h2 className="find-task-container-header">Найти задание</h2>
          <FindTaskFilters
            filtersState={filters}
            setFiltersState={setFilters}
          />
          <div className="find-task-main-content-wrapper">
            <FindTaskMainContent />
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
