import React from 'react'
import ReactDOM from 'react-dom'
// import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import styles from './Modal.module.scss';

const Modal = ({ show, onCancel, children }) => {
   const modal = (
      <>
         <Backdrop onClick={onCancel} show={show} />
         {show && <div className={styles.Modal}>
            {children}
         </div>}
      </>
   )

   return ReactDOM.createPortal(modal, document.getElementById("modal-hook"));
}

export default Modal;