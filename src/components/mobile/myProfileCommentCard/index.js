import commentUserImage from "assets/images/my-profile-Comments-task-user-picture.png";
import React from "react";

export default function MyProfileCommentCardMobile() {
  return (
    <div className="mycm-wrapper">
      <div className="mycm-comment-card-wrapper-inner">
        <div>
          <p className="body3">Задание «Установить сантехнику» выполнено</p>
          <p className="body4 mp-task-description">
            Задачу выполнил. рекомендую.
          </p>
          <p className="body3">6.12.21</p>
          <div className="mp-user-profile mycm-user-profile">
            <img className="mycm-personalImage" src={commentUserImage} alt="user" />
            <p className="body4">Екатерина А.</p>
            <p className="body4">Нет отзывов</p>
          </div>
        </div>
      </div>
    </div>
  );
}
