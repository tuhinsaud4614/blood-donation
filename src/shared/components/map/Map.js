import PropTypes from "prop-types";

import mapImg from "../../../assets/img/map.png";
import classes from "./Map.module.css";

const Map = ({ className, children }) => {
  return (
    <div className={`${classes.Map} ${className} bx-sh2`}>
      <img src={mapImg} alt="map" className={`${classes.MapImg}`} />
      <div className={`${classes.Container}`}>{children}</div>
    </div>
  );
};

Map.protoTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Map;
