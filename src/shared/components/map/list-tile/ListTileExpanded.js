import PropTypes from "prop-types";

import Avatar from "../../avatar/Avatar";
import Button from "../../button/Button";
import classes from "./ListTile.module.css";

const ListTileExpandedTop = ({ title, address, mobile, rating, status }) => {
  return (
    <div className={`${classes.ListTileExpandedTop}`}>
      {/* Top Left start */}
      <div className={`${classes.ListTileExpandedTopLeft}`}>
        <h3>{title}</h3>
        <div className={`${classes.ListTileExpandedTopLeftDown}`}>
          <span className="text-muted">{address}</span>
          <span className="text-muted">{mobile}</span>
        </div>
      </div>
      {/* Top Left end */}

      {/* Top Right start */}
      <div className={`${classes.ListTileExpandedTopRight}`}>
        <span>
          {rating} {rating > 1 ? "Ratings" : "Rating"}
        </span>
        <span>{status}</span>
      </div>
      {/* Top Right end */}
    </div>
  );
};

ListTileExpandedTop.protoTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ListTileExpandedTop;

export const ListTileExpandedBottomReviewer = ({ data }) => {
  return (
    <div className={`${classes.ListTileExpandedBottomReviewer}`}>
      <h4>
        Recent Reviews <span>{data.count}</span>
      </h4>
      {/* Body start */}
      <div className={`${classes.ReviewerBody}`}>
        {/* Body Left start */}
        <div className={`${classes.ReviewerBodyLeft}`}>
          <div className={`${classes.ReviewerBodyLeftHead}`}>
            <Avatar src={data.img} alt={data.name} />
            <div className={`${classes.ReviewerBodyLeftHeadRight}`}>
              <h4>{data.name}</h4>
              <span className="text-muted">{data.date}</span>
            </div>
          </div>
          <p className={`${classes.ReviewerBodyLeftBody}`}>
            {data.description}
          </p>
        </div>
        {/* Body Left end */}
        {/* Body right start */}
        <Button className={`${classes.ReviewerBodyButton}`} clicked={() => {}}>
          Send Request
        </Button>
        {/* Body right end */}
      </div>
      {/* Body end */}
    </div>
  );
};

ListTileExpandedBottomReviewer.protoTypes = {
  data: PropTypes.exact({
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export const ListTileExpandedBottomHospital = ({ data }) => {
  return (
    <div className={`${classes.ListTileExpandedBottomHospital}`}>
      {/* Body Left start */}
      <div className={`${classes.HospitalLeft}`}>
        <h2>{data.period}</h2>
        <p className="text-muted">Sat, Sun, Mon, Tue, Wed, Thu, Fri</p>
        <h4>Blood Bank Available</h4>
      </div>
      {/* Body Left end */}
      {/* Body right start */}
      <Button className={classes.ReviewerBodyButton} clicked={() => {}}>
        Send Request
      </Button>
      {/* Body right end */}
    </div>
  );
};

ListTileExpandedBottomHospital.protoTypes = {
  data: PropTypes.exact({
    period: PropTypes.string.isRequired,
  }).isRequired,
};
