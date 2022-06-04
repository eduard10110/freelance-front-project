import React from "react";
import contractCardHeart1 from "../../../assets/images/contract-card-heart1.png";
import contractCardHeart2 from "../../../assets/images/contract-card-heart2.png";

export default function ContractCard() {
    return (
        <div className="contract-card">
            <div className="contract-card-heart1">
                <img src={contractCardHeart1} alt="heart" />
            </div>
            <div className="contract-card-info">
              <p className="body3">Составление договора аренды</p>
              <p className="body4">Исполнитель нашелся за 9 минут</p>
              <p className="body1">Приятный специалист. Составил договор в кратчайшие сроки. Рекомендую!</p>
            </div>
            <div className="contract-card-person">
              
            </div>
            <div className="contract-card-heart2">
                <img src={contractCardHeart2} alt="heart" />
            </div>
        </div>
    );
}
