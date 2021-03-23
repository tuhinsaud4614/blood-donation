import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/Button";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { removeError } from "../../../store/auth/actions";

const Modal = ({ title, show = true, children }) => {
  const [isShowing, setIsShowing] = useState(show);
  const rdxDispatch = useDispatch();
  const closeModalHandler = () => {
    setIsShowing(false);
    rdxDispatch(removeError());
  };
  return ReactDOM.createPortal(
    isShowing && (
      <div onClick={closeModalHandler} className={`${classes.BackDrop}`}>
        <div className={`${classes.Modal}`}>
          <header className={`${classes.ModalHeader}`}>
            <h2>{title}</h2>
          </header>
          <div className={`${classes.ModalContent}`}>
            <p>{children}</p>
          </div>
          <div className={`${classes.ModalFooter}`}>
            <Button clicked={closeModalHandler}>Close</Button>
          </div>
        </div>
        {/* {content} */}
      </div>
    ),
    document.getElementById("custom-modal")
  );
};

export default Modal;
