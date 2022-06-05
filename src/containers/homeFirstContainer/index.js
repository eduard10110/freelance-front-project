import React from "react";

export default function HomeFirstContainer() {
  return (
    <div className="first-container-wrapper">
      <div className="container-inner">
        <h1>melaek</h1>
        <p className="body1 mt-2">
          Поможем найти надёжного исполнителя для любых задач
        </p>

        <div className="buttons-container">
          <button className="btn btn-purple body7">Заказать услугу</button>
          <button className="btn btn-purple-filled body7">
            Стать исполнителем
          </button>
        </div>
      </div>
      <div className="images-wrapper">
        <div className="boy-image"></div>
        <div className="girl-image"></div>
      </div>
    </div>
  );
}
