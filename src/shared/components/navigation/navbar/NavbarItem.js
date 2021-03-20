import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const NavbarItem = ({ link, icon, children }) => {
  return (
    <li className={`${classes.NavItem}`}>
      <NavLink
        to={link}
        className={`${classes.NavItemLink}`}
        activeClassName={`${classes.Active}`}
      >
        {icon}
        <span>{children}</span>
      </NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavbarItem;
