import React from "react"
import { Link } from "react-router-dom"
import styles from "./NavLinkItem.module.scss"

const NavLinkItem = ({ onClickHandler, linkTo, children }) => {
   return (
      <Link
         to={linkTo}
         onClick={onClickHandler}
         className={styles.navLink}
         // activeclassName={styles.navLinkActive}
      >
         {children}
      </Link>
   )
}

export default NavLinkItem
