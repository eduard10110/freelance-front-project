import React from "react";
import { categoriesEnum } from "helpers/enums/categoryEnums";
import CategoryItem from "components/categoryItem";
import Masonry from "react-responsive-masonry"

export default function HomeCategoriesContainer() {
    return (
        <div className="categories-wrapper">
            {/* <h2>Категории</h2> */}
            <div className="caregory-items-wrapper">
                <div className="caregories-left-column">
                  <Masonry columnsCount={3} gutter="20px">
                    {categoriesEnum.leftColumn.map((item) => (
                        <CategoryItem
                            width={item.width}
                            height={item.height}
                            label={item.label}
                            image={item.image}
                            key={item.label}
                        />
                    ))}
                  </Masonry>
                </div>
                {/* <div className="caregories-right-column">
                    <div className="categories-right-top">
                        {categoriesEnum.rightTopColumn.map((item) => (
                            <CategoryItem
                                width={item.width}
                                height={item.height}
                                label={item.label}
                                image={item.image}
                                key={item.label}
                            />
                        ))}
                    </div>
                    <div className="categories-right-bottom">
                        {categoriesEnum.rightBottomColumn.map((item) => (
                            <CategoryItem
                                width={item.width}
                                height={item.height}
                                label={item.label}
                                image={item.image}
                                key={item.label}
                            />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
