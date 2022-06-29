import workExampleImage1 from "assets/images/my-profile-work-examples-1.png";
import workExampleImage2 from "assets/images/my-profile-work-examples-2.png";
import ratingStar from "assets/images/rating-star.png";
import MyProfileCommentCardMobile from "components/mobile/myProfileCommentCard";
import UniquePerformerPersonalInfoMobile from "components/mobile/unipuePerformerPersonaInfo";
import React, { useState } from "react";
import Slider from "react-slick/lib/slider";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function UniquePerformer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeTab = (id) => () => setActiveIndex(id);
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
            <p style={{ marginTop: 80 }} className="body2">
              Виды выполняемых работ
            </p>
            <p className="body3 work-example-category-item btn-td-underline">
              Ремонт и строительство
            </p>
            <p className="body3">Сантехнические работы</p>
            <p className="body3 work-example-subcategory-lasItem">
              Электромонтажные работы
            </p>
            <div className="star-rating-container-wrapper upm-rating-container-wrapper">
              <p className="body3">Средняя оценка: 5.0</p>
              <div className="upm-stars-wrapper">
                <img src={ratingStar} alt="star" />
                <img src={ratingStar} alt="star" />
                <img src={ratingStar} alt="star" />
                <img src={ratingStar} alt="star" />
                <img src={ratingStar} alt="star" />
              </div>
            </div>
            <p className="body2">Отзывы</p>
            <div className="mp-comments-navbar-wrapper">
              <p className="body3">Сортировать</p>
              <button
                onClick={handleChangeTab(0)}
                className={`btn-default btn-td-underline ${
                  activeIndex === 0 ? " btn-default-active" : ""
                }`}
              >
                Положительные
              </button>
              <button
                onClick={handleChangeTab(1)}
                className={`btn-default btn-td-underline ${
                  activeIndex === 1 ? " btn-default-active" : ""
                }`}
              >
                Отрицательные
              </button>
            </div>
            <MyProfileCommentCardMobile />
            <MyProfileCommentCardMobile />
            {/* <MyProfileCommentCard />
            <MyProfileCommentCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
