import ContractCard from "components/cards/contractCard";
import React from "react";

export default function HomeReviewsContainer() {
  return (
    <div className="reviews-container-wrapper">
      <div className="reviews-container">
        <div className="content-wrapper">
          <h2>Отзывы об исполнителях</h2>
          <div className="reviews-inner">
            <ContractCard />
            <div className="love-with-hands-image-wrapper">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="start-today-container-wrapper">
        <div className="start-today-container">
          <div className="content-wrapper">
            <div className="content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
