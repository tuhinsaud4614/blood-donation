import PropTypes from "prop-types";
import { IoChevronDownCircleSharp } from "react-icons/io5";

import classes from "./Select.module.css";

const Select = (props) => {
  const {
    id,
    name,
    changed,
    data,
    icon,
    selectedValue = props.data[0].value,
  } = props;
  return (
    <div className={`${classes.SelectContainer}`}>
      <select
        id={id}
        name={name}
        className={`form-control text-secondary ${classes.Select} shadow`}
        onChange={changed}
      >
        {data.map((item, index) => (
          <option
            selected={selectedValue === item.value}
            value={item.value}
            key={index}
          >
            {item.title}
          </option>
        ))}
      </select>
      <span className={`${classes.Icon}`}>
        {icon ? icon : <IoChevronDownCircleSharp />}
      </span>
    </div>
  );
};

Select.propTypes = {
  selectedValue: PropTypes.string,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  icon: PropTypes.element,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Select;
