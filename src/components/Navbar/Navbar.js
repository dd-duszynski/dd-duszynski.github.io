import React, { useContext } from "react"
import GlitchClip from 'react-glitch-effect/core/Clip';
import { AppContext } from "../../context/context"
import NavLinkItem from "./NavLinkItem/NavLinkItem"
import styles from "./Navbar.module.scss"
import Logo from "./Logo/Logo"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"

const Navbar = () => {
   const {
      size,
      handleOpenSidebar,
      handleCloseSidebar,
      isSidebarOpen,
      textContent
   } = useContext(AppContext);

   const { navigation } = textContent
   const isHash = i => i.indexOf("#") > 0;

   const largeDevices = (
      <>
         <Logo />
         <GlitchClip iterationCount="1">
            <ul className={styles.links}>
               {navigation.map(item => {
                  if (isHash(item[1])) {
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
      </>
   )

   const smallDevice = (
      <>
         <Logo />
         <HamburgerMenu
            handleOpenSidebar={handleOpenSidebar}
            handleCloseSidebar={handleCloseSidebar}
            isSidebarOpen={isSidebarOpen}
         />
      </>
   )

   return (
      <header className={styles.navbar} id="nav">
         <nav className={styles.container}>
            {size > 800 ? largeDevices : smallDevice}
         </nav>
      </header>
   )
}

export default Navbar
