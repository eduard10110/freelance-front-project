import MyProfileCommentCard from "components/cards/myProfileComment-card";
import React, { useState } from "react";

export default function MyProfileCommentsContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeTab = (id) => () => setActiveIndex(id);

  return (
    <>
      <p className="body2">Отзывы</p>
      <div className="mp-comments-navbar-wrapper">
        <p className="body3">Сортировать</p>
        <button
          onClick={handleChangeTab(0)}
          className={`btn-default btn-td-underline ${
            activeIndex === 0 ? " btn-default-active" : ""
          }`}
        >
          Положительные
        </button>
        <button
          onClick={handleChangeTab(1)}
          className={`btn-default btn-td-underline ${
            activeIndex === 1 ? " btn-default-active" : ""
          }`}
        >
          Отрицательные
        </button>
      </div>
      <MyProfileCommentCard />
      <MyProfileCommentCard />
    </>
  );
}
