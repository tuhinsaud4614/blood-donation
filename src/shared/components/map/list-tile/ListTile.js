import PropTypes from "prop-types";
import { useState } from "react";

import bloodImg from "../../../../assets/img/blood-drop.svg";
import Avatar from "../../avatar/Avatar";
import Divider from "../../Divider";
import ListTileExpandedTop, {
  ListTileExpandedBottomHospital,
  ListTileExpandedBottomReviewer,
} from "./ListTileExpanded";

import classes from "./ListTile.module.css";

const ListTile = ({
  title,
  img,
  address,
  titleIcon,
  mobile,
  bloodGroup,
  status,
  rating,
  expandData,
  className,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className={`${classes.ListTile} ${className} ${
        expanded ? classes.Expanded : ""
      } bx-sh2`}
    >
      {!expanded && (
        <>
          {bloodGroup && (
            <span className={`${classes.FloatIcon}`}>
              <img src={bloodImg} alt="blood" />
              <span>{bloodGroup}</span>
            </span>
          )}
          <Avatar src={img} alt={title} />
          <div className={`${classes.Body}`}>
            <h3>
              {title}{" "}
              {titleIcon && (
                <span className={`${classes.TitleIcon}`}>{titleIcon}</span>
              )}
            </h3>
            <div>
              <span className="text-muted">{address}</span>
              <div className={`${classes.BodyBottom}`}>
                <span className="text-muted">{mobile}</span>
                <span>{status}</span>
              </div>
            </div>
          </div>
        </>
      )}
      {expanded && (
        <ExpandedContainer
          top={
            <ListTileExpandedTop
              address={address}
              mobile={mobile}
              rating={rating}
              status={status}
              title={title}
            />
          }
          bottom={
            status === "available" ? (
              <ListTileExpandedBottomReviewer data={expandData.reviewer} />
            ) : (
              <ListTileExpandedBottomHospital data={expandData.hospital} />
            )
          }
        />
      )}
    </div>
  );
};

ListTile.protoTypes = {
  img: PropTypes.string.isRequired,
  titleIcon: PropTypes.element,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  bloodGroup: PropTypes.string,
  status: PropTypes.oneOf(["available", "open now"]).isRequired,
  rating: PropTypes.number.isRequired,
  expandData: PropTypes.exact({
    reviewer: PropTypes.exact({
      count: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    hospital: PropTypes.exact({
      period: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default ListTile;

const ExpandedContainer = ({ top, bottom }) => {
  return (
    <>
      {top}
      <Divider type="horizontal" />
      {bottom}
    </>
  );
};

ExpandedContainer.propTypes = {
  top: PropTypes.element.isRequired,
  bottom: PropTypes.element.isRequired,
};
