import PropTypes from "prop-types";

import classes from "./DateSlider.module.css";

const SliderItem = ({ value, current, id, clicked }) => {
  let cl = classes.Xs;
  if (id === current) {
    cl = classes.Current;
  } else if (id === current - 1 || id === current + 1) {
    cl = classes.Sm;
  }
  return (
    <div
      className={`${classes.SliderItem} ${cl}`}
      onClick={() => {
        clicked(id);
      }}
    >
      {value}
    </div>
  );
};

SliderItem.propTypes = {
  value: PropTypes.string,
  current: PropTypes.number,
  id: PropTypes.number,
  clicked: PropTypes.func.isRequired,
};

export default SliderItem;
