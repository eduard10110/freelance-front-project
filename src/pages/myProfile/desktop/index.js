import workExampleImage1 from "assets/images/my-profile-work-examples-1.png";
import workExampleImage2 from "assets/images/my-profile-work-examples-2.png";
import MyProfilePersonalInfo from "containers/myProfilePersonalInfo";
import addButton from "assets/images/my-profile-work-examples-add-button.png";
import ratingStar from "assets/images/rating-star.png";
import React from "react";
import MyProfileCommentsContainer from "containers/myProfileCommentsContainer";
import greenHurt1 from "assets/images/my-profile-green-heart-1.png";
import greenHurt2 from "assets/images/my-profile-green-heart-2.png";

export default function MyProfileDesktop() {
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper my-profile-container-wrapper">
          <h2>Мой профиль</h2>
          <MyProfilePersonalInfo />
          <div className="mp-about-container-wrapper">
            <p className="body2">Обо мне</p>
            <button className="btn-default btn-td-underline mp-edit-button">
              Редактировать
            </button>
          </div>
          <p className="body3">
            Выполняю ремонт квартир, комнат, мелкий ремонт, сантехника,
            электрика, утепление балконов, устройство межкомнатных перегородок.
            Натяжные потолки. Работы выполняю сам, на большие объемы привлекаю
            помощника. Опыт работы в строительстве и ремонте более 20 лет.
            Составление сметы, заключение договора, гарантия .
          </p>
          <div className="mp-about-container-wrapper">
            <p className="body2">Примеры работ</p>
            <button className="btn-default btn-td-underline mp-edit-button">
              Редактировать
            </button>
          </div>
          <div className="mp-work-examples">
            <img src={workExampleImage1} alt="my-profile-work-examples-1" />
            <img src={workExampleImage2} alt="my-profile-work-examples-2" />
            <div className="mp-upload-work-example">
              <img src={addButton} alt="addButton" />
            </div>
          </div>
          <p className="body2">Виды выполняемых работ</p>
          <p className="body3 work-example-category-item btn-td-underline">
            Ремонт и строительство
          </p>
          <p className="body3">Сантехнические работы</p>
          <p className="body3 work-example-subcategory-lasItem">
            Электромонтажные работы
          </p>
          <div className="star-rating-container-wrapper">
            <p className="body2">Средняя оценка: 5.0</p>
            <div className="mp-stars-wrapper">
              <img src={ratingStar} alt="star" />
              <img src={ratingStar} alt="star" />
              <img src={ratingStar} alt="star" />
              <img src={ratingStar} alt="star" />
              <img src={ratingStar} alt="star" />
            </div>
          </div>
          <MyProfileCommentsContainer />
        </div>
      </div>
      <img src={greenHurt1} alt="green hurt" className="green-hurt-1" />
      <img src={greenHurt2} alt="green hurt" className="green-hurt-2" />
    </div>
  );
}
