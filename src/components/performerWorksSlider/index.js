import React from "react";
import sliderImage from "assets/images/slider-image.png";
import Slider from "react-slick/lib/slider";

export default function PerformerWorksSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={sliderImage} alt="slider" />
      </div>
      <div>
        <img src={sliderImage} alt="slider" />
      </div>
    </Slider>
  );
}
