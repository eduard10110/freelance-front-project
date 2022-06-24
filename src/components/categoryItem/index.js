import React from "react";

export default function CategoryItem(props) {
  const { width, height, label, image } = props;
  return (
    <div className="category-item" style={{ width: width, height: height }}>
      <div>
        <img src={image} alt="category" />
      </div>
      <h4 className="category-item-label">{label}</h4>
    </div>
  );
}
