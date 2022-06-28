import UniquePerformerPersonalInfoMobile from "components/mobile/unipuePerformerPersonaInfo";
import React from "react";
import Slider from "react-slick/lib/slider";
import workExampleImage1 from "assets/images/my-profile-work-examples-1.png";
import workExampleImage2 from "assets/images/my-profile-work-examples-2.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function UniquePerformer() {
  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="content-wrapper-mobile upm-wrapper">
          <h4>Профиль исполнителя</h4>
          <UniquePerformerPersonalInfoMobile />
          <div className="mp-about-container-wrapper upm-about-container-wrapper">
            <p className="body2">Обо мне</p>
          </div>
          <p className="body4">
            Выполняю ремонт квартир, комнат, мелкий ремонт, сантехника,
            электрика, утепление балконов, устройство межкомнатных перегородок.
            Натяжные потолки. Работы выполняю сам, на большие объемы привлекаю
            помощника. Опыт работы в строительстве и ремонте более 20 лет.
            Составление сметы, заключение договора, гарантия .
          </p>
          <div className="mp-about-container-wrapper upm-about-container-wrapper">
            <p className="body2">Примеры работ</p>
          </div>
          <div className="upm-slider-wrapper">
            <Slider {...settings}>
              <img src={workExampleImage1} alt="my-profile-work-examples-1" />
              <img src={workExampleImage2} alt="my-profile-work-examples-2" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
