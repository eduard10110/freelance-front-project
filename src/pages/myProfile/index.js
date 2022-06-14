import MyProfilePersonalInfo from "containers/myProfilePersonalInfo";
import React from "react";

export default function MyProfile() {
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
        </div>
      </div>
    </div>
  );
}
