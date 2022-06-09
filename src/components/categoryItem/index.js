import React from 'react'

export default function CategoryItem(props) {
    const {width, height, label, image} = props;
  return (
    <div className="category-item" style={{width: width, height: height}}>{label}</div>
  )
}
