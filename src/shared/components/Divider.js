import PropTypes from "prop-types";

const Divider = ({ type = "vertical", space = 16 }) => {
  const style = {
    height: "inherit",
    width: "1px",
    margin: `0 ${space}px`,
    background: "var(--secondary)",
    flexShrink: "0",
  };
  if (type === "horizontal") {
    style.height = "1px";
    style.width = "100%";
    style.margin = `${space}px 0`;
  }
  return <div style={style} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf(["horizontal", "vertical"]),
  space: PropTypes.number,
};

export default Divider;
