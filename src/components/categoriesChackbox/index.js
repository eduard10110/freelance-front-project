import React, { useState } from "react";
import PropTypes from "prop-types";
import SubCategoriesItem from "components/subCategoriesItem";

export default function CategoriesCheckbox({ data, state, setState }) {
  const [radioButtonsState, setRadioButtonsState] = useState([1]);

  const handleRadioButtonChange = (id) => () => {
    let newData = [...radioButtonsState];

    newData.some((elem) => elem === id)
      ? (newData = newData.filter((elem) => elem !== id))
      : newData.push(id);
    setRadioButtonsState(newData);
  };

  return (
    <div className="categories-checkbox-wrapper">
      {data?.map((elem) => {
        const opened = radioButtonsState.some((item) => item === elem.id);
        return (
          <div key={elem.id}>
            <SubCategoriesItem
              handleRadioButtonChange={handleRadioButtonChange}
              elem={elem}
              opened={opened}
              state={state}
              setState={setState}
            />
            {opened &&
              elem.subCategories?.map((item) => {
                const opened = radioButtonsState.some((id) => id === item.id);
                return (
                  <div key={item.id}>
                    <div className="subCategories-item">
                      <SubCategoriesItem
                        handleRadioButtonChange={handleRadioButtonChange}
                        elem={item}
                        state={state}
                        setState={setState}
                        opened={opened}
                      />
                    </div>
                    {opened &&
                      item.subCategories?.map((category) => (
                        <div
                          className="subCategories-item-margin"
                          key={category.id}
                        >
                          <SubCategoriesItem
                            handleRadioButtonChange={handleRadioButtonChange}
                            elem={category}
                            state={state}
                            setState={setState}
                          />
                        </div>
                      ))}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

CategoriesCheckbox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  state: PropTypes.array,
  setState: PropTypes.func,
};
