import React from "react"
import styles from "./HamburgerMenu.module.scss"

const HamburgerMenu = ({isSidebarOpen, handleCloseSidebar, handleOpenSidebar}) => {
   return (
      <button
         type="button"
         className={
            isSidebarOpen ? styles.btnIsClicked : styles.btn
         }
         onClick={
            isSidebarOpen
               ? handleCloseSidebar
               : handleOpenSidebar
         }
      >
         <div className={styles.line1}></div>
         <div className={styles.line2}></div>
         <div className={styles.line3}></div>
      </button>
   )
}

export default HamburgerMenu
