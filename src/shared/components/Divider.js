import PropTypes from "prop-types";

const Divider = ({ type = "vertical" }) => {
  const style = {
    height: "100%",
    width: "2px",
    background: "var(--text-color)",
  };
  if (type === "horizontal") {
    style.height = "2px";
    style.width = "100%";
  }
  return <div style={style} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default Divider;
