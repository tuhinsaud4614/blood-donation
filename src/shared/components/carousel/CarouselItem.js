import PropTypes from "prop-types";

import classes from "./Carousel.module.css";

const CarouselItem = ({ content }) => {
  return (
    <a href={content.path} className={`${classes.CarouselItem} bx-sh3`}>
      <img src={content.img} alt="user" />
      <div className={`${classes.CarouselItemContent}`}>
        <h3>{content.title}</h3>
        <h4>{content.held}</h4>
        <div className={`${classes.CarouselItemContentBottom}`}>
          <span>By {content.by}</span>
          <span>{content.time}</span>
        </div>
      </div>
    </a>
  );
};

CarouselItem.propTypes = {
  content: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    held: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarouselItem;
