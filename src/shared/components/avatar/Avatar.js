import PropTypes from "prop-types";

import classes from "./Avatar.module.css";

const Avatar = ({ src, alt, height, width, customClass, children }) => {
  return (
    <div
      className={`${classes.Avatar} ${customClass}`}
      style={{
        height: height ? `${height}px` : undefined,
        width: width ? `${width}px` : undefined,
      }}
    >
      {src && <img src={src} alt={alt} />}
      {children}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.string,
  customClass: PropTypes.string,
};

export default Avatar;
