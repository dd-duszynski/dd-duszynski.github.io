import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Backdrop.module.scss'


const Backdrop = (props) => {
   const backdrop = props.show && (
      <div className={styles.Backdrop} onClick={props.onClick}></div>
   )

   return ReactDOM.createPortal(
      backdrop, document.getElementById('backdrop-hook')
   )
}

export default Backdrop
