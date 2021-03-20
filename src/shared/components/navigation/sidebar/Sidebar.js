import medicalImg from "../../../../assets/img/medical.svg" 
import Logo from "../../logo/Logo";
import Navbar from "../navbar/Navbar";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={`${classes.Sidebar}`}>
      <section className={`${classes.Header}`}>
        <Logo customClass={`${classes.HeaderLogo}`} />
      </section>
      <Navbar />
      <section className={`${classes.Foot}`}>
        <img className={`${classes.FootImg}`} src={medicalImg} alt="undraw" />
        <h3 className={`${classes.FootText}`}>
          <span>Donate Blood</span>
          <br />
          <span>Save Life</span>
        </h3>
        <Logo customClass={classes.FootLogo} />
      </section>
    </aside>
  );
};

export default Sidebar;
