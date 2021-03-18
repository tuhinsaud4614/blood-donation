import PropTypes from "prop-types";

import Avatar from "../avatar/Avatar";
import classes from "./Radio.module.css";

const GenderRadio = ({ id, name, changed, img, icon, children }) => {
  return (
    <label className={`${classes.GenderRadio}`}>
      <input id={id} type="radio" name={name} onChange={changed} />
      <div className={`${classes.GenderRadioLabel}`}>
        <span className={`${classes.GenderRadioLabelIcon}`}>{icon}</span>
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
  icon: PropTypes.element,
  children: PropTypes.string,
};

export default GenderRadio;
