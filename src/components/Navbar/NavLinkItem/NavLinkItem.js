import React from "react"
import { NavLink } from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';
import styles from "./NavLinkItem.module.scss"

const NavLinkItem = ({ onClickHandler, linkTo, children, hash }) => {
   const link = (
      <NavLink
         exact to={linkTo}
         onClick={onClickHandler}
         className={styles.navLink}
      >
         {children}
      </NavLink>
   )
   const hashLink = (
      <NavHashLink
         smooth 
         exact to={linkTo}
         onClick={onClickHandler}
         className={styles.navLink}
      >
         {children}
      </NavHashLink>
   )
   return hash ? hashLink : link;
}

export default NavLinkItem
