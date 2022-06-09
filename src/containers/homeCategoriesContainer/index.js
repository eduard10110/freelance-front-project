import React from "react";
import { categoriesEnum } from "helpers/enums/categoryEnums";
import CategoryItem from "components/categoryItem";

export default function HomeCategoriesContainer() {
    console.log(categoriesEnum.rightTopColumn, "---------------");
    return (
        <div className="categories-wrapper">
            {/* <h2>Категории</h2> */}
            <div className="caregory-items-wrapper">
                <div className="caregories-left-column">
                    {categoriesEnum.leftColumn.map((item) => (
                        <CategoryItem
                            width={item.width}
                            height={item.height}
                            label={item.label}
                            image={item.image}
                            key={item.label}
                        />
                    ))}
                </div>
                <div className="caregories-right-column">
                    <div className="categories-right-top">
                        <div className="categories-right-top-left">
                            {categoriesEnum.rightTopColumnLeft.map((item) => (
                                <CategoryItem
                                    width={item.width}
                                    height={item.height}
                                    label={item.label}
                                    image={item.image}
                                    key={item.label}
                                />
                            ))}
                        </div>
                        <div className="categories-right-top-right">
                            {categoriesEnum.rightTopColumnRight.map((item) => (
                                <CategoryItem
                                    width={item.width}
                                    height={item.height}
                                    label={item.label}
                                    image={item.image}
                                    key={item.label}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="categories-right-bottom">
                        <div className="categories-right-bottom-top">
                            {categoriesEnum.rightBottomColumnTop.map((item) => (
                                <CategoryItem
                                    width={item.width}
                                    height={item.height}
                                    label={item.label}
                                    image={item.image}
                                    key={item.label}
                                />
                            ))}
                        </div>
                        <div className="categories-right-bottom-bottom">
                            {categoriesEnum.rightBottomColumnBottom.map((item) => (
                                <CategoryItem
                                    width={item.width}
                                    height={item.height}
                                    label={item.label}
                                    image={item.image}
                                    key={item.label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
