import PropTypes from "prop-types";

import Avatar from "../avatar/Avatar";
import classes from "./Radio.module.css";

const ImageRadio = ({
  id,
  name,
  value,
  changed,
  img,
  icon,
  defaultChecked = false,
  children,
}) => {
  return (
    <label className={`${classes.ImageRadio}`}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={changed}
        defaultChecked={defaultChecked}
      />
      <div className={`${classes.ImageRadioLabel}`}>
        <span className={`${classes.ImageRadioLabelIcon}`}>{icon}</span>
        <Avatar src={img} alt="gender-avatar" height={70} width={70} />
        <p>{children}</p>
      </div>
    </label>
  );
};

ImageRadio.propTypes = {
  defaultChecked: PropTypes.bool,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  img: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.string,
};

export default ImageRadio;
