import Checkbox from "components/checkbox";
import React, { useState } from "react";

export default function Support() {
  const [data, setData] = useState({
    name: "",
    email: "",
    problemDescription: "",
    acceptPrivacyAndPolicy: false,
  });
  const handleChange = (id, payload) => (e) => {
    setData({ ...data, [id]: payload || e.target.value });
  };

  const checkDisabled = () => {
    return (
      !!data.name &&
      !!data.email &&
      data.problemDescription &&
      data.acceptPrivacyAndPolicy
    );
  };

  return (
    <div className="support-container-wrapper">
      <div className="support-container-header">
        <div>
          <h2>Служба поддержки</h2>
          <h4 className="description">
            Мы на связи ежедневно 9:00 до 21:00 по московскому времени. Рады
            помочь и ответить на Ваши вопросы.
          </h4>
        </div>
        <div className="logo"></div>
      </div>

      <div className="inputs-group">
        <div>
          <label htmlFor="name" className="body2">
            Имя
          </label>
          <input
            onChange={handleChange("name")}
            value={data.name}
            id="name"
            className="input"
            placeholder="Иван"
          />
        </div>
        <div>
          <label htmlFor="Email" className="body2">
            Email
          </label>
          <input
            onChange={handleChange("email")}
            value={data.email}
            id="Email"
            className="input"
            placeholder="Ivanivanov@gmail.com"
          />
        </div>
        <div>
          <label id="problem-description" className="body2">
            Опишите проблему
          </label>
          <input
            onChange={handleChange("problemDescription")}
            value={data.problemDescription}
            id="problem-description"
            className="input problem-description"
            placeholder="Введите текст"
          />
        </div>
      </div>
      <div className="checkbox-section">
        <Checkbox
          label="Нажимая на кнопку, я соглашаюсь на обработку персональных данных"
          handleCheckboxChange={handleChange}
          checked={data.acceptPrivacyAndPolicy}
          id="acceptPrivacyAndPolicy"
        />
      </div>
      <button
        className={`btn send-button ${
          checkDisabled() ? "btn-purple-filled" : "btn-filled-disabled"
        } `}
      >
        Отправить
      </button>
    </div>
  );
}
