import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";
import girlImage from "assets/images/create-task-success-girl.png";

export default function CreateTaskSuccessDesktop() {
  const navigate = useNavigate();

  const handleNavigateTo = (path) => () => navigate(path);

  return (
    <div className="page-wrapper">
      <div className="page">
        <img src={girlImage} alt="girl" className="cts-girl-image" />
        <div className="content-wrapper create-task-success-container-wrapper">
          <h2>Ваше задание успешно опубликовано!</h2>
          <div className="cts-buttons-container-wrapper">
            <button
              onClick={handleNavigateTo(routes.CREATE_TASK)}
              className="body3 btn btn-purple"
            >
              Создать еще задание
            </button>
            <button
              onClick={handleNavigateTo(routes.HOME)}
              className="body3 btn btn-purple-filled"
            >
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
