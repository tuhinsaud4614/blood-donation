import PropTypes from "prop-types";
import { FaThumbsUp, FaShare } from "react-icons/fa";

import Avatar from "../../../../shared/components/avatar/Avatar";
import classes from "./ReviewCard.module.css";

const ReviewCard = ({ reviewer, description, likeHandler, replyHandler }) => {
  return (
    <div className={`${classes.ReviewCard} bx-sh2`}>
      <div className={`${classes.Head}`}>
        <Avatar src={reviewer.img} alt={reviewer.name} />
        <div className={`${classes.HeadRight}`}>
          <h4>{reviewer.name}</h4>
          <span className="text-muted">{reviewer.date}</span>
        </div>
      </div>
      <p className={`${classes.Body}`}>{description}</p>
      <div className={`${classes.Foot}`}>
        <span onClick={likeHandler}>
          <FaThumbsUp />Like
        </span>
        <span onClick={replyHandler}>
          <FaShare /> Share
        </span>
      </div>
    </div>
  );
};

ReviewCard.protoTypes = {
  reviewer: PropTypes.exact({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  likeHandler: PropTypes.func.isRequired,
  replyHandler: PropTypes.func.isRequired,
};

export default ReviewCard;
