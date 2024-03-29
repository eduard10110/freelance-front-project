import React from "react";
import personalPicture from "assets/images/my-profile-personal-picture.png";
import ratingStar from "assets/images/rating-star.png";
import eyeIcon from "assets/images/eye-icon.png";

export default function UniquePerformerPersonalInfoMobile() {
  return (
    <div className="upm-personal-info-wrapper">
      <div className="upm-picture-wrapper">
        <img src={personalPicture} alt="profilePicture" />
        <button className="btn btn-purple-filled body3">
          Предложить задание
        </button>
      </div>
      <div className="my-profile-personal-info-wrapper-inner">
        <div className="my-profile-name-wrapper">
          <h4>Иван Иванов</h4>
        </div>
        <p className="body3">29 лет, Москва</p>
        <div className="my-profile-user-rating-container-wrapper">
          <p className="body4">Рейтинг исполнителя:</p>
          <img src={ratingStar} alt="ratingStar" />
          <p className="body4">5.0</p>
        </div>
        <p className="body4">Выполнил 295 заданий</p>
        <div className="mp-seen-history upm-seen-history">
          <img src={eyeIcon} alt="eye-icon" />
          <p className="body4">128 просмотров профиля</p>
        </div>
      </div>
    </div>
  );
}
