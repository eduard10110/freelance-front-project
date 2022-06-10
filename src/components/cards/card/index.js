import React from "react";
import cardIcon from "assets/images/task-card-icon.png";
import PropTypes from "prop-types";

// texts will coming from props or from backend
export default function Card({ data }) {
  const {
    name,
    budget,
    address,
    dateFrom,
    dateTo,
    userName,
    comments,
    clicked,
  } = data;

  const handleClickToTask = (e) => {
    e.stopPropagation();
    alert("click");
  };

  const handleClickToCard = () => alert("Card Click");

  return (
    <div onClick={handleClickToCard} className="card">
      <div className="card-avatar">
        <img src={cardIcon} alt="avatar" />
      </div>
      <div className="card-details">
        <p>{name}</p>
        <div>
          <p>{address}</p>
          <p className="card-dates">
            {dateFrom} — {dateTo}
          </p>
        </div>
        <div>
          <p>{userName}</p>
          <p className="card-comments">{!comments && "Нет отзывов"}</p>
        </div>
      </div>
      <div className="card-order">
        <p>{budget}</p>
        <button onClick={handleClickToTask} className="btn btn-purple">
          {clicked ? "Отклик отправлен" : "Откликнуться"}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
