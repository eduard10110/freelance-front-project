import hands from "assets/images/love-with-hands.png";
import ContractCard from "components/cards/contractCard";
import React from "react";
import Slider from "react-slick/lib/slider";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeReviewsContainer() {
  return (
    <div className="reviews-container-wrapper">
      <div className="reviews-container">
        <div className="content-wrapper">
          <h2>Отзывы об исполнителях</h2>
          <div className="reviews-inner">
            <div className="slider-wrapper">
              <Slider {...settings}>
                <ContractCard />
                <ContractCard />
                <ContractCard />
                <ContractCard />
              </Slider>
            </div>
            <div className="love-with-hands-image-wrapper">
              <div className="love-with-hands-content">
                <div className="love-with-hands-bg"></div>
                <img src={hands} alt="hands" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
