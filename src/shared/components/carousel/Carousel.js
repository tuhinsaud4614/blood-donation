import { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Carousel.module.css";

import CarouselItem from "./CarouselItem";
import CarouselButton from "./CarouselButton";

const Carousel = ({ data, className }) => {
  const ref = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const prev = () => {
    ref.current && ref.current.slickPrev();
  };

  const next = () => {
    ref.current.slickNext();
  };

  return (
    // <div className="container">
    <Slider
      ref={ref}
      {...settings}
      className={`${classes.Carousel} ${className || ""}`}
      prevArrow={<CarouselButton direction="left" clicked={prev} />}
      nextArrow={<CarouselButton direction="right" clicked={next} />}
    >
      {data.map((item) => (
        <CarouselItem key={item.id} content={item} />
      ))}
    </Slider>
    // </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      by: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      held: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  className: PropTypes.string,
};

export default Carousel;
