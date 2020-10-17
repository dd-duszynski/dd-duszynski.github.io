import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import NavLinkItem from "./NavLinkItem/NavLinkItem"
import styles from "./Navbar.module.scss"
import Logo from "./Logo/Logo"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import GlitchClip from 'react-glitch-effect/core/Clip';

const Navbar = () => {
   const {
      size,
      handleOpenSidebar,
      handleCloseSidebar,
      isSidebarOpen,
      textContent
   } = useContext(AppContext);

   const { navigation } = textContent

   const biggerSize = (
      <div className={styles.container}>
         <Logo />
         <GlitchClip iterationCount="1">
            <ul className={styles.links}>
               {navigation.map(item => {
                  if (item[1].indexOf("#") > 0) {
                     return (
                        <li key={item[0]} className={styles.link}>
                           <NavLinkItem linkTo={item[1]} hash={true}>
                              {item[0]}
                           </NavLinkItem>
                        </li>
                     )
                  } else {
                     return (
                        <li key={item[0]} className={styles.link}>
                           <NavLinkItem linkTo={item[1]}>
                              {item[0]}
                           </NavLinkItem>
                        </li>
                     )
                  }
               })
               }
            </ul>
         </GlitchClip>
      </div>
   )

   const smallerSize = (
      <div className={styles.container}>
         <Logo />
         <HamburgerMenu
            handleOpenSidebar={handleOpenSidebar}
            handleCloseSidebar={handleCloseSidebar}
            isSidebarOpen={isSidebarOpen}
         />
      </div>
   )

   return (
      <nav className={styles.navbar} id="nav">
         {size > 992 ? biggerSize : smallerSize}
      </nav>
   )
}

export default Navbar
