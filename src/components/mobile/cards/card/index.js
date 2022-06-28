import cardIcon from "assets/images/task-card-icon.png";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFindTaskFromOrders } from "store/action-creators/app";

export default function CardMobile({ data, onClickToCard }) {
  const [modalData, setModalData] = useState({ isOpen: false, data: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    name,
    budget,
    address,
    dateFrom,
    dateTo,
    userName,
    comments,
    clicked,
    id,
  } = data;

  console.log(modalData);

  const handleClickToTask = (e) => {
    e.stopPropagation();
    setModalData({ isOpen: true, data });
  };

  const handleClickToCard = () => {
    if (onClickToCard) {
      return onClickToCard(id);
    }
    dispatch(setFindTaskFromOrders(false));
    return navigate(`/find-task/${id}`);
  };

  // const handleClose = () => setModalData({ isOpen: false, data: null });

  return (
    <div onClick={handleClickToCard} className="ftm-card-wrapper">
      <div className="ftm-card">
        <div className="card-avatar">
          <img src={cardIcon} alt="avatar" className="ftmtc-avatar" />
        </div>
        <div className="ftmtc-card-details">
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
        <div className="mobile-card-order">
          <p className="body4">{budget}</p>
        </div>
      </div>
      <div className="ftmtc-click-to-task-button-wrapper">
        <button
          onClick={handleClickToTask}
          className="btn btn-purple ftmtc-click-to-task-button"
        >
          {clicked ? "Отклик отправлен" : "Откликнуться"}
        </button>
      </div>
    </div>
  );
}
