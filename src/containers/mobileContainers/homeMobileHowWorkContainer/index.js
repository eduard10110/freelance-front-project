import React from "react";
import ServiceWorkStep1 from "assets/images/how-works-service-step-1.png";
import ServiceWorkStep2 from "assets/images/how-works-service-step-2.png";
import ServiceWorkStep3 from "assets/images/how-works-service-step-3.png";

export default function HomeMobileHowWorkContainer() {
  return (
    <div className="mobile-how-works-service-container-wrapper">
      <div className="how-works-service-container">
        <div className="content-wrapper">
          <h4>Как работает сервис</h4>
          <div className="service-steps-wrapper">
            <div className="step-item">
              <img src={ServiceWorkStep1} alt="ServiceWorkStep1" />
              <div>
                <p className="body6">Опишите задачу</p>
                <p className="body-mobile-1">Это бесплатно и займёт 3‑4 минуты.</p>
              </div>
            </div>
            <div className="step-item">
              <img src={ServiceWorkStep2} alt="ServiceWorkStep2" />
              <div>
                <p className="body6">Получите отклики</p>
                <p className="body-mobile-1">Обычно они приходят в течение 30 минут.</p>
              </div>
            </div>
            <div className="step-item">
              <img src={ServiceWorkStep3} alt="ServiceWorkStep3" />
              <div>
                <p className="body6">Выберите исполнителя</p>
                <p className="body-mobile-1">
                  Общайтесь в режиме реального времени и обсудите сроки
                  выполнения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
