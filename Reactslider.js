import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards7 from "./cacrds";
const SimpleSlider7 = () => {
  const settings7 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section7slider">
      <Slider {...settings7} className="cards7np">
        <Cards7
          title="Crisp Spanish tortilla Matzo brei"
          category="Recipe"
          author="Celeste Mills"
        />

        <Cards7
          title="Crisp Spanish tortilla Matzo brei"
          category="Recipe"
          author="Celeste Mills"
          time="15 min"
        />

        <Cards7
          title="Crisp Spanish tortilla Matzo brei"
          category="Recipe"
          author="Celeste Mills"
          time="15 min"
        />

        <Cards7
          title="Crisp Spanish tortilla Matzo brei"
          category="Recipe"
          author="Celeste Mills"
          time="15 min"
        />

        <Cards7
          title="Crisp Spanish tortilla Matzo brei"
          category="Recipe"
          author="Celeste Mills"
          time="15 min"
        />
        <Cards7
          title="Crisp Spanish tortilla Matzo brei"
          category="Recipe"
          author="Celeste Mills"
          time="15 min"
        />
        <Cards7
          title="Crisp Spanish tortilla Matzo brei"
          category="Recipe"
          author="Celeste Mills"
          time="15 min"
        />
      </Slider>
    </section>
  );
};

export default SimpleSlider7;
