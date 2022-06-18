import workExampleImage1 from "assets/images/my-profile-work-examples-1.png";
import workExampleImage2 from "assets/images/my-profile-work-examples-2.png";
import ratingStar from "assets/images/rating-star.png";
import React, { useState } from "react";
import MyProfileCommentsContainer from "containers/myProfileCommentsContainer";
import greenHurt1 from "assets/images/my-profile-green-heart-1.png";
import greenHurt2 from "assets/images/my-profile-green-heart-2.png";
import UniquePerformerPersonalInfo from "components/uniquePerformerPersonalInfo";
import ModalComponent from "components/modal";
import PerformerWorksSlider from "components/performerWorksSlider";

export default function UniquePerformer() {
    const [sliderVizible, setSliderVisible] = useState(false);

    const handleOpenSlider = (bool) => ()=> {
        setSliderVisible(bool);
    };

    const customStyles = {
        content: {
            maxWidth: "100%",
            height: "700px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            padding: "none",
            position: "relative",
            className: "slider_popup"
            // borderRadius: "16px",
            // background: "transparent",
            // boxShadow:
            //     "111px 125px 67px rgba(0, 0, 0, 0.01), 63px 70px 57px rgba(0, 0, 0, 0.05), 28px 31px 42px rgba(0, 0, 0, 0.09), 7px 8px 23px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
        },
    };
    return (
        <div className="page-wrapper">
            <div className="page">
                <div className="content-wrapper my-profile-container-wrapper">
                    <h2>Профиль исполнителя</h2>
                    <UniquePerformerPersonalInfo />
                    <div className="mp-about-container-wrapper">
                        <p className="body2">Обо мне</p>
                    </div>
                    <p className="body3">
                        Выполняю ремонт квартир, комнат, мелкий ремонт,
                        сантехника, электрика, утепление балконов, устройство
                        межкомнатных перегородок. Натяжные потолки. Работы
                        выполняю сам, на большие объемы привлекаю помощника.
                        Опыт работы в строительстве и ремонте более 20 лет.
                        Составление сметы, заключение договора, гарантия .
                    </p>
                    <div className="mp-about-container-wrapper">
                        <p className="body2">Примеры работ</p>
                    </div>
                    <div className="mp-work-examples">
                        <img
                            src={workExampleImage1}
                            alt="my-profile-work-examples-1"
                            onClick={handleOpenSlider(true)}
                        />
                        <img
                            src={workExampleImage2}
                            alt="my-profile-work-examples-2"
                            onClick={handleOpenSlider(true)}
                        />
                    </div>
                    <p className="body2">Виды выполняемых работ</p>
                    <p className="body3 work-example-category-item btn-td-underline">
                        Ремонт и строительство
                    </p>
                    <p className="body3">Сантехнические работы</p>
                    <p className="body3 work-example-subcategory-lasItem">
                        Электромонтажные работы
                    </p>
                    <div className="star-rating-container-wrapper">
                        <p className="body2">Средняя оценка: 5.0</p>
                        <div className="mp-stars-wrapper">
                            <img src={ratingStar} alt="star" />
                            <img src={ratingStar} alt="star" />
                            <img src={ratingStar} alt="star" />
                            <img src={ratingStar} alt="star" />
                            <img src={ratingStar} alt="star" />
                        </div>
                    </div>
                    <MyProfileCommentsContainer />
                    <ModalComponent
                        isOpen={sliderVizible}
                        customStyles={customStyles}
                        onRequestClose={handleOpenSlider(false)}
                    >
                        <div className="works-slider">
                            <PerformerWorksSlider />
                        </div>
                    </ModalComponent>
                </div>
            </div>
            <img src={greenHurt1} alt="green hurt" className="green-hurt-1" />
            <img src={greenHurt2} alt="green hurt" className="green-hurt-2" />
        </div>
    );
}
