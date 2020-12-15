import React from 'react'
import { Link } from "react-router-dom";
import styles from './Logo.module.scss'
import logo from '../../../assets/dd_logo.svg'
// impDort logoHover from '../../../assets/dd_logoHover.svg'

const Logo = () => {
   // const [isLogoHover, setIsLogoHover] = React.useState(false)
   // const setIsLogoHoverHandler = () => {
   //    isLogoHover ? setIsLogoHover(false) : setIsLogoHover(true)
   // }
   return (
      <Link to="/" className={styles.Logo}>
         <img
            // src={isLogoHover ? logoHover : logo}
            src={logo}
            alt="logo"
            className={styles.logoImg}
         // onMouseOver={setIsLogoHoverHandler}
         // onMouseLeave={setIsLogoHoverHandler}
         />
      </Link>
   )
}

export default Logo
