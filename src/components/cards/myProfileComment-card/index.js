import React from "react";
import commentUserImage from "assets/images/my-profile-Comments-task-user-picture.png";

export default function MyProfileCommentCard() {
  return (
    <div className="mp-comment-card-wrapper">
      <div className="mp-comment-card-wrapper-inner">
        <div>
          <p className="body1">Задание «Установить сантехнику» выполнено</p>
          <p className="body3 mp-task-description">
            Задачу выполнил. рекомендую.
          </p>
          <p className="body3">6.12.21</p>
          <div className="mp-user-profile">
            <img src={commentUserImage} alt="user" />
            <p className="body3">Екатерина А.</p>
            <p className="body4">Нет отзывов</p>
          </div>
        </div>
      </div>
    </div>
  );
}
