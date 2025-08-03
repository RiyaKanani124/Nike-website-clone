import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./simpleSlider.css";
import Data from "./Data"; 

function Arrow(props) {
  const { className, style, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={handleClick}
    />
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Data.map((item) => (
          <div key={item.id} className="slide_image_wrapper">
            
              <img src={item.image} alt={item.title} />
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
