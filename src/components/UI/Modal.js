import React from 'react'
import ReactDOM from 'react-dom'
// import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import styles from './Modal.module.scss';

const Modal = (props) => {
   const modal = (
      <React.Fragment>
         {props.show && (
            <>
               <Backdrop onClick={props.onCancel} />
               <div className={styles.Modal}>
                  {props.children}
               </div>
            </>
         )}
      </React.Fragment>
   )

   return ReactDOM.createPortal(modal, document.getElementById("modal-hook"));
}

export default Modal;