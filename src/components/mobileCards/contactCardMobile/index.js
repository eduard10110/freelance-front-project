import React from "react";
import arrowOpen from "../../../assets/images/arrow-open.png";
import contractCardHeart1 from "../../../assets/images/contract-card-heart1.png";
import contractCardHeart2 from "../../../assets/images/contract-card-heart2.png";
import defaultPersonContract from "../../../assets/images/default-person-contract.png";
import ratingStar from "../../../assets/images/rating-star.png";

export default function ContractCardMobile() {
  return (
    <div className="mobile-contract-card">
      <div className="contract-card-heart1">
        <img src={contractCardHeart1} alt="heart" />
      </div>
      <div className="contract-card-info">
        <p className="body">Составление договора аренды</p>
        <p className="body">Исполнитель нашелся за 9 минут</p>
        <p className="body4">
          Приятный специалист. Составил договор в кратчайшие сроки. Рекомендую!
        </p>
      </div>
      <div className={`contract-card-person`}>
        <span role="presentation">
          <img src={arrowOpen} alt="arrow" />
        </span>
        <div className="contract-card-person-info">
          <div className="contract-card-person-info-details">
            <p className="body3">Алексей А.</p>
            <p className="body">
              Рейтинг исполнителя:
              <span>
                <img src={ratingStar} alt="rating" />
              </span>
              <span> 4.9</span>
            </p>
            <p className="body">
              Выполнил <span>{295}</span> заданий
            </p>
          </div>
          <div className="contract-default-person-image">
            <img src={defaultPersonContract} alt="avatar" />
          </div>
        </div>
        <div className="contract-card-person-view-more">
          <button className="btn btn-purple">Смотреть профиль</button>
        </div>
      </div>
      <div className="contract-card-heart2">
        <img src={contractCardHeart2} alt="heart" />
      </div>
    </div>
  );
}

