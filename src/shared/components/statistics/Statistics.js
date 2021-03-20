import classes from "./Statistics.module.css";
import img from "../../../assets/img/statistics.png";

const Statistics = () => {
  return (
    <div className={`${classes.Statistics} bx-sh2`}>
      <div className={`${classes.Head}`}>
        <h3>Statistics</h3>
        <span className="text-muted">Statistics</span>
      </div>
      <img src={img} alt="Statistics" />
    </div>
  );
};

export default Statistics;
