import { FiHome, FiBell, FiMap, FiSettings } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

import routes from "../../../utils/routes";
import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className={`${classes.Nav}`}>
      <ul className={`${classes.NavItems}`}>
        <NavbarItem link={routes.home} icon={<FiHome />}>
          Home
        </NavbarItem>
        <NavbarItem link={routes.profile} icon={<FaUserAlt />}>
          Profile
        </NavbarItem>
        <NavbarItem link={routes.notifications} icon={<FiBell />}>
          Notifications
        </NavbarItem>
        <NavbarItem link="/donors" icon={<FiMap />}>
          Donors
        </NavbarItem>
        <NavbarItem link="/customize" icon={<FiSettings />}>
          Customize
        </NavbarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
