import PropTypes from "prop-types";

import Logo from "../../../shared/components/logo/Logo";
import classes from "../SignUp.module.css";

const SignUpContainer = ({ title, info, formClass, children }) => {
  return (
    <div className={`row m-0 w-100`}>
      <section className={`col-12 col-md-6 py-md-3`}>
        <Logo customClass={`${classes.Logo}`} />
        <div className={`${classes.LogoInfo}`}>{info}</div>
      </section>
      {/* Form start */}
      <section className={`col-12 col-md-6 ${classes.Form} ${formClass}`}>
        <h1>{title}</h1>
        {children}
      </section>
      {/* Form end */}
    </div>
  );
};

SignUpContainer.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  formClass: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default SignUpContainer;
