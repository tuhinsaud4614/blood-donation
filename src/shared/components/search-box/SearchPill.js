import PropTypes from "prop-types";

import classes from "./SearchBox.module.css";

const SearchPill = ({ children }) => {
  return <span className={`${classes.SearchPill}`}>{children}</span>;
};

SearchPill.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SearchPill;
