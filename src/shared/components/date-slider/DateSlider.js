import { useMemo, useState } from "react";
import PropTypes from "prop-types";

import classes from "./DateSlider.module.css";
import SliderItem from "./DateSliderItem";

// This function generate surrounded items of current item
function closeItems(start, len, arr) {
  const newArr = [];
  while (len) {
    if (start < 0 || start >= arr.length) {
      newArr.push({ id: start++, value: "" });
    } else {
      newArr.push(arr[start++]);
    }
    len--;
  }
  return newArr;
}

function DateSlider({ closeItemNum, changed, items, name, children }) {
  const modifiedItems = useMemo(() => {
    return items.map((item, index) => {
      return { id: index, value: item };
    });
  }, [items]);

  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(() => {
    return [
      ...closeItems(-2, closeItemNum, modifiedItems),
      modifiedItems[0],
      ...closeItems(1, closeItemNum, modifiedItems),
    ];
  });

  const clickHandler = (id) => {
    setCurrent(id);
    setData([
      ...closeItems(id - closeItemNum, closeItemNum, modifiedItems),
      modifiedItems[id],
      ...closeItems(id + 1, closeItemNum, modifiedItems),
    ]);
    changed(name, modifiedItems[id].value);
  };

  return (
    <div className={`${classes.Container}`}>
      <div className={`${classes.Slider}`}>
        {data.map((item) => {
          if (item.value === "") {
            return (
              <div className={`${classes.SliderItemEmpty}`} key={item.id} />
            );
          }
          return (
            <SliderItem
              key={item.id}
              value={item.value}
              id={item.id}
              current={current}
              clicked={clickHandler}
            />
          );
        })}
      </div>
      <p className={`${classes.Text}`}>{children}</p>
    </div>
  );
}

DateSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  closeItemNum: PropTypes.number,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default DateSlider;
