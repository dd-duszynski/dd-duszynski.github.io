import React from 'react'
import { Link } from "react-router-dom";
import styles from './Logo.module.scss'
import logo from '../../../assets/dd_logo.svg'
// impDort logoHover from '../../../assets/dd_logoHover.svg'
import {FaRegLightbulb} from 'react-icons/fa'
import {GiBullyMinion} from 'react-icons/gi'
import {GoLightBulb} from 'react-icons/go'
const Logo = () => {
   // const [isLogoHover, setIsLogoHover] = React.useState(false)
   // const setIsLogoHoverHandler = () => {
   //    isLogoHover ? setIsLogoHover(false) : setIsLogoHover(true)
   // }
   return (
      <Link to="/" className={styles.Logo}>
         {/* <img
            // src={isLogoHover ? logoHover : logo}
            src={logo}
            alt="logo"
            className={styles.logoImg}
         // onMouseOver={setIsLogoHoverHandler}
         // onMouseLeave={setIsLogoHoverHandler}
         /> */}
         {/* <GiBullyMinion/> */}
         {/* <GoLightBulb/> */}
         <div className={styles.b1}>
            <div className={styles.b2}></div>
            <div className={styles.b3}></div>
         </div>

      </Link>
   )
}

export default Logo
