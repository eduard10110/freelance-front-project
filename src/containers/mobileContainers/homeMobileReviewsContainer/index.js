// import hands from "assets/images/love-with-hands.png";
import ContractCardMobile from "components/mobileCards/contactCardMobile";
import React from "react";
import Slider from "react-slick/lib/slider";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeMobileReviewsContainer() {
  return (
    <div className="mobile-reviews-container-wrapper">
      <div className="reviews-container">
        {/* <div className="content-wrapper"> */}
          <h4>Отзывы об исполнителях</h4>
          <div className="reviews-inner">
            <div className="slider-wrapper">
              <Slider {...settings}>
                <ContractCardMobile />
                <ContractCardMobile />
                <ContractCardMobile />
                <ContractCardMobile />
              </Slider>
            </div>
            {/* <div className="love-with-hands-image-wrapper">
              <div className="love-with-hands-content">
                <div className="love-with-hands-bg"></div>
                <img src={hands} alt="hands" />
              </div>
            </div> */}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
