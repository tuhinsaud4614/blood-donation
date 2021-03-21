import PropTypes from "prop-types";

const Divider = ({ type = "vertical" }) => {
  const style = {
    height: "inherit",
    width: "1px",
    margin: "0 calc(var(--pd) * 2)",
    background: "var(--secondary)",
    flexShrink: "0"
  };
  if (type === "horizontal") {
    style.height = "1px";
    style.width = "100%";
    style.margin = "calc(var(--pd) * 2) 0";
  }
  return <div style={style} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default Divider;
