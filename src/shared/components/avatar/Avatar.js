import PropTypes from "prop-types";

import classes from "./Avatar.module.css";

const Avatar = ({ src, alt, height, width }) => {
  return (
    <div
      className={`${classes.Avatar}`}
      style={{
        height: height ? `${height}px` : undefined,
        width: width ? `${width}px` : undefined,
      }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Avatar;
