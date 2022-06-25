import React, { useState } from "react";
import filterIcon from "assets/images/icons/filter-icon.png";
import FindTaskFiltersMobileModal from "components/findTaskFiltersMobileModal";

export default function FindTaskMobile() {
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

  return (
    <>
      {filtersData.open && (
        <FindTaskFiltersMobileModal
          onCancel={handleFiltersModalChange}
          {...filtersData}
        />
      )}
      <div className="page-wrapper">
        <div className="page">
          <div className="content-wrapper-mobile">
            <img
              src={filterIcon}
              alt="filterIcon"
              className="findTask-filter-icon cursor-pointer"
              onClick={handleFiltersModalChange(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
