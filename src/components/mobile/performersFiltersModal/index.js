import CategoriesCheckbox from "components/categoriesChackbox";
import ModalComponent from "components/modal";
import { checkboxFakeData } from "helpers/constants";
import React, { useState } from "react";

const customStyles = {
  content: {
    width: "100%",
    height: "100%",
    top: "10%",
    left: "0%",
    position: "relative",
    padding: "30px",
  },
};

export default function PerformersFiltersModal({
  visible,
  handleClose,
  data,
  setData,
}) {
  const [filters, setFilters] = useState({ ...data });

  const handleCategoriesCheckboxChange = (state) =>
    setFilters({ ...filters, categoriesCheckbox: state });

  const handleSubmit = () => {
    setData({ ...filters });
    handleClose(false)();
  };
  return (
    <ModalComponent isOpen={visible} customStyles={customStyles}>
      <div className="page-wrapper">
        <div className="page">
          <div className="content-wrapper-mobile">
            <CategoriesCheckbox
              state={filters.categoriesCheckbox}
              setState={handleCategoriesCheckboxChange}
              data={checkboxFakeData}
            />
            <div className="ftm-buttons-wrapper pfm-buttons-wrapper">
              <button onClick={handleClose(false)} className="btn btn-purple">
                Отменить
              </button>
              <button onClick={handleSubmit} className="btn btn-purple-filled">
                Применить
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  );
}
