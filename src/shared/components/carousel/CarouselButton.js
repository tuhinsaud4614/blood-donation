import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import classes from "./Carousel.module.css";

const CarouselButton = ({ direction, clicked }) => {
  return (
    <button
      onClick={clicked}
      type="button"
      data-role="none"
      className={`${classes.CarouselButton} ${
        direction === "left" ? classes.Prev : classes.Next
      }`}
    >
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
};

CarouselButton.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  clicked: PropTypes.func.isRequired,
};

export default CarouselButton;
