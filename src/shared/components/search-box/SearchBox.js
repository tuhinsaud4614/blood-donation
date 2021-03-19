import PropTypes from "prop-types";

import classes from "./SearchBox.module.css";

const SearchBox = ({
  id,
  name,
  changed,
  submitted,
  value,
  placeholder,
  icon,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitted();
      }}
    >
      <div className={`${classes.SearchBoxContainer} bx-sh2`}>
        <span onClick={submitted} className={classes.Icon}>
          {icon}
        </span>
        <input
          id={id}
          name={name}
          type="search"
          className={`form-control ${classes.SearchBox}`}
          value={value}
          placeholder={placeholder}
          onChange={changed}
        />
      </div>
    </form>
  );
};

SearchBox.propTypes = {
  changed: PropTypes.func.isRequired,
  submitted: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  icon: PropTypes.element,
};

export default SearchBox;
