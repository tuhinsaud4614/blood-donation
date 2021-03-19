import PropTypes from "prop-types";

const Divider = ({ type = "vertical" }) => {
  const style = {
    height: "100%",
    width: "2px",
    margin: "0 calc(var(--pd) * 2)",
    background: "var(--text-color)",
    flexShrink: "0"
  };
  if (type === "horizontal") {
    style.height = "2px";
    style.width = "100%";
    style.margin = "var(--pd) 0";
  }
  return <div style={style} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default Divider;
