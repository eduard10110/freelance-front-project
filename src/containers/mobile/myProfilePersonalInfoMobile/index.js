import eyeIcon from "assets/images/eye-icon.png";
import mailIcon from "assets/images/mail-icon.png";
import personalPicture from "assets/images/my-profile-personal-picture.png";
import phoneIcon from "assets/images/phone-icon.png";
import ratingStar from "assets/images/rating-star.png";
import React from "react";

export default function MyProfilePersonalInfoMobile() {
  return (
    <div className="my-profile-personal-info-wrapper-mobile">
      <div className="my-profile-personal-picture-wrapper">
        <img src={personalPicture} alt="profilePicture" />
        <button className="btn btn-purple-filled body3">Изменить фото</button>
      </div>
      <div className="my-profile-personal-info-wrapper-inner">
        <div className="my-profile-name-wrapper">
          <h4>Иван Иванов</h4>
          <button className="btn-default btn-td-underline body3 mp-edit-button">
            Редактировать
          </button>
        </div>
        <p className="body3">29 лет, Москва</p>
        <div className="my-profile-user-rating-container-wrapper">
          <p className="body4">Рейтинг исполнителя:</p>
          <img src={ratingStar} alt="ratingStar" />
          <p className="body4">5.0</p>
        </div>
        <p className="body4">Выполнил 295 заданий</p>
        <div className="mp-contacts-wrapper">
          <h4>Контакты</h4>
          <button className="btn-default btn-td-underline mp-edit-button body3">
            Редактировать
          </button>
        </div>
        <div className="mp-phone-mail-container-wrapper">
          <img src={phoneIcon} alt="phone-icon" />
          <p className="body4">+7 917 743-42-10</p>
        </div>
        <div className="mp-phone-mail-container-wrapper">
          <img src={mailIcon} alt="mail-icon" />
          <p className="body4">ivanivanov@gmail.com</p>
        </div>
      </div>
      <div className="mp-seen-history">
        <img src={eyeIcon} alt="eye-icon" />
        <p className="body4">128 просмотров профиля</p>
      </div>
    </div>
  );
}
