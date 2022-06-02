import React from "react";
import PropTypes from "prop-types";

export default function SubCategoriesItem({
  elem,
  state,
  setState,
  opened,
  handleRadioButtonChange,
}) {
  const { subCategories, id, label } = elem;

  const handleCheckboxChange = (id) => () => {
    let newState = [...state];
    newState.some((elem) => elem === id)
      ? (newState = newState.filter((elem) => elem !== id))
      : newState.push(id);
    setState(newState);
  };

  return (
    <div className="checkbox-item">
      {subCategories && (
        <div
          onClick={handleRadioButtonChange(id)}
          className={`radioButton ${
            opened ? "radioButton-opened" : "radioButton-closed"
          }`}
        ></div>
      )}
      <div
        onClick={handleCheckboxChange(id)}
        className={
          state?.some((elem) => elem === id) ? "checkbox-checked" : "checkbox"
        }
      ></div>
      <p onClick={handleCheckboxChange(id)} className="body-1">
        {label}
      </p>
    </div>
  );
}

SubCategoriesItem.propTypes = {
  elem: PropTypes.object,
  state: PropTypes.array,
  setState: PropTypes.func,
  opened: PropTypes.bool,
  handleRadioButtonChange: PropTypes.func,
};
