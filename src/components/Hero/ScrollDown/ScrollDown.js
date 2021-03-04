import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import styles from './ScrollDown.module.scss'

const ScrollDown = () => {
   return (
      <NavHashLink
         smooth
         exact to={"/#projects"}
         className={styles.ScrollDown}
      >
         <span></span>
         <span></span>
         <span></span>
      </NavHashLink>
   )
}

export default ScrollDown
