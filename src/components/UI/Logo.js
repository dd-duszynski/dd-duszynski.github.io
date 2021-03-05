import React from 'react'
import { Link } from "react-router-dom";
import styles from './Logo.module.scss'
// import logo from '../../../assets/dd-.svg'

const Logo = ({ isSidebarOpen, handleCloseSidebar }) => {

   return (
      <Link
         to="/"
         className={styles.Logo}
         onClick={isSidebarOpen && handleCloseSidebar}
      >
         dd-
         {/* <img src={logo} alt="logo" /> */}
      </Link>
   )
}

export default Logo
