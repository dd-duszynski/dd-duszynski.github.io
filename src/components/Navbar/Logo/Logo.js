import React, { useState } from 'react'
import {Link} from "react-router-dom";
import styles from './Logo.module.scss'
import logo from '../../../assets/dd_logo.svg'
import logoHover from '../../../assets/dd_logoHover.svg'

const Logo = () => {
   const [isLogoHover, setIsLogoHover] = useState(false)
   const setIsLogoHoverHandler = () => {
      isLogoHover ? setIsLogoHover(false) : setIsLogoHover(true)
   }
   return (
      <Link to="/" className={styles.logo}>
         <div className={styles.logo__container}>
            <img
               src={isLogoHover ? logoHover : logo}
               alt="logo"
               className={styles.logo__image}
               onMouseEnter={setIsLogoHoverHandler}
               onMouseLeave={setIsLogoHoverHandler}
            />
         </div>
      </Link>
   )
}

export default Logo
