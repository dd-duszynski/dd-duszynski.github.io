import React from 'react'
import { Link } from "react-router-dom";
import styles from './Logo.module.scss'
const Logo = ({ isSidebarOpen, handleCloseSidebar }) => {
   return (
      <Link
         to="/"
         className={styles.Logo}
         onClick={isSidebarOpen && handleCloseSidebar}
      >
         dd-
      </Link>
   )
}

export default Logo
