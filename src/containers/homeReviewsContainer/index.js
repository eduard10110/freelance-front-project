import girlWithComputerImage from "assets/images/girl-with-computer.png";
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
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="start-today-container-wrapper">
        <div className="start-content-image">
          <img
            src={girlWithComputerImage}
            // className="girl-with-computer-image"
            alt="girl"
          />
        </div>
        <div className="start-today-container">
          <div className="helper-div"></div>
          <div className="start-today-content">
            <h2>Начните сегодня</h2>
            <p className="body1">Исполнители уже готовы вам помочь</p>
            <div className="buttons-wrapper">
              <button className="btn btn-purple">Создать задание</button>
              <button className="btn btn-purple-filled">Найти задание</button>
            </div>
          </div>
        </div>
        {/* <div className="start-today-container">
          <div className="content-wrapper">
            <div>
              <img
                src={girlWithComputerImage}
                className="girl-with-computer-image"
                alt="girl"
              />
            </div>
            <div className="content-wrapper">
              <div className="content">
                <h2>Начните сегодня</h2>
                <p className="body1">Исполнители уже готовы вам помочь</p>
                <div className="buttons-wrapper">
                  <button className="btn btn-purple">Создать задание</button>
                  <button className="btn btn-purple-filled">
                    Найти задание
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
