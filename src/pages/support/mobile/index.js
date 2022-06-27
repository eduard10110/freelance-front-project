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

  const checkDisabled = () => {
    return (
      !!data.name &&
      !!data.email &&
      data.problemDescription &&
      data.acceptPrivacyAndPolicy
    );
  };

  const handleOpenModal = () => setSuccessModalVisible(true);

  const handleCloseModal = () => setSuccessModalVisible(false);

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
          <div className="sm-inputs-group"></div>
        </div>
      </div>
    </div>
  );
}
