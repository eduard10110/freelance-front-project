import React from "react";
import { mobileCategoriesEnum } from "helpers/enums/categoryEnums";
import MobileCategoryItem from "components/mobileCategoryItem";

export default function HomeMobileCategoriesContainer() {
  return (
    <div className="mobile-category-content">
      <div className="categories-wrapper">
        <h4>Категории</h4>
        <div className="caregory-items-wrapper">
          <div className="caregories-left-column">
            {mobileCategoriesEnum.map((item) => (
              <MobileCategoryItem
                label={item.label}
                image={item.image}
                key={item.label}
                imageLeft={item.imageLeft}
              />
            ))}
          </div>
        </div>
        <div className="more-categories">
          <span className="body5">Посмотреть все услуги</span>
        </div>
      </div>
    </div>
  );
}
