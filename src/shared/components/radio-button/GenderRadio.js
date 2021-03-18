import PropTypes from "prop-types";

import Avatar from "../avatar/Avatar";
import classes from "./GenderRadio.module.css";

const GenderRadio = ({ id, name, changed, img, children }) => {
  return (
    <label className={`${classes.GenderRadio}`}>
      <input id={id} type="radio" name={name} onChange={changed} />
      <div className={`${classes.GenderRadioLabel}`}>
        <Avatar src={img} alt="gender-avatar" height={70} width={70} />
        <p>{children}</p>
      </div>
    </label>
  );
};

GenderRadio.propTypes = {
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.string,
};

export default GenderRadio;
