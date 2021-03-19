import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classes from "./ProfileHistory.module.css";
import ProfileHistoryItem from "./ProfileHistoryItem";

const ProfileHistory = () => {
  const data = [
    {
      id: "1",
      hospital: "Saint Sebatine Hospital",
      bag: 1,
      date: { day: 7, month: "Dec" },
    },
    {
      id: "1",
      hospital: "Saint Sebatine Hospital",
      bag: 1,
      date: { day: 7, month: "Dec" },
    },
  ];
  return (
    <section className={`${classes.History} bx-sh2`}>
      <div className={`${classes.Header}`}>
        <NavLink
          to="#"
          className={classes.HeaderNav}
          activeClassName={`${classes.Active}`}
        >
          Donation
        </NavLink>
        <NavLink
          to="#"
          className={classes.HeaderNav}
          //   activeClassName={`${classes.Active}`}
        >
          Requests
        </NavLink>
      </div>
      {/* History table start */}
      <div className={`${classes.HistoryTable}`}>
        {data.map((item) => (
          <ProfileHistoryItem key={item.id} info={item} />
        ))}
      </div>
      {/* History table end */}
    </section>
  );
};
ProfileHistory.propTypes = {};
export default ProfileHistory;
