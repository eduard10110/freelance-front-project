import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

export default function CreateTaskMobile() {
  const navigate = useNavigate();

  const handleNavigateTo = (path) => () => navigate(path);
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper-mobile ctsm-wrapper">
          <p className="body2">Ваше задание успешно опубликовано!</p>
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
