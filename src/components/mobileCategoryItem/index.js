import React from "react";

export default function MobileCategoryItem(props) {
  const { imageLeft, label, image } = props;
  return (
    <div className="mobile-category-item">
      {imageLeft && <h4 className="category-item-label body1 label-left">{label}</h4>}
      <div>
        <img src={image} alt="category" />
      </div>
      {!imageLeft && <h4 className="category-item-label body1 label-right">{label}</h4>}
    </div>
  );
}
