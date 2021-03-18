import PropTypes from "prop-types";
import { IoChevronDownCircleSharp } from "react-icons/io5";

import classes from "./Select.module.css";

const Select = ({ id, name, changed, data }) => {
  return (
    <div className={`${classes.SelectContainer}`}>
      <select
        id={id}
        name={name}
        className={`form-control text-secondary ${classes.Select} shadow`}
        onChange={changed}
      >
        {data.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ))}
      </select>
      <IoChevronDownCircleSharp className={`${classes.Icon}`} />
    </div>
  );
};

Select.propTypes = {
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Select;
