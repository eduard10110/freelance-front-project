import Checkbox from "components/checkbox";
import React, { useState } from "react";

export default function SupportMobile() {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    problemDescription: "",
    acceptPrivacyAndPolicy: false,
  });
  const handleChange = (id, payload) => (e) => {
    setData({ ...data, [id]: payload || e.target.value });
  };

  console.log(successModalVisible);

  const checkDisabled = () => {
    return (
      !!data.name &&
      !!data.email &&
      data.problemDescription &&
      data.acceptPrivacyAndPolicy
    );
  };

  const handleOpenModal = () => setSuccessModalVisible(true);

  // const handleCloseModal = () => setSuccessModalVisible(false);

  const handleSubmit = () => {
    if (checkDisabled()) {
      handleOpenModal();
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper-mobile sm-wrapper">
          <h4>Служба поддержки</h4>
          <h5 className="body3 sm-description">
            Мы на связи ежедневно 9:00 до 21:00 по московскому времени. Рады
            помочь и ответить на Ваши вопросы.
          </h5>
          <div className="sm-inputs-group">
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
              <textarea
                onChange={handleChange("problemDescription")}
                value={data.problemDescription}
                id="problem-description"
                className="input problem-description body3"
                placeholder="Введите текст"
              />
            </div>
          </div>
          <div className="sm-checkbox-section">
            <Checkbox
              label="Нажимая на кнопку, я соглашаюсь на обработку персональных данных"
              handleCheckboxChange={handleChange}
              checked={data.acceptPrivacyAndPolicy}
              id="acceptPrivacyAndPolicy"
              labelClassName="body4"
            />
          </div>
          <button
            onClick={handleSubmit}
            className={`btn sm-send-button ${
              checkDisabled() ? "btn-purple-filled" : "btn-filled-disabled"
            } `}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
