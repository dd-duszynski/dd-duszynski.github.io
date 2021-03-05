import React, { useContext } from "react"
import GlitchClip from 'react-glitch-effect/core/Clip';
import { AppContext } from "../../context/context"
import NavLinkItem from "./NavLinkItem/NavLinkItem"
import styles from "./Navbar.module.scss"
import Logo from "../UI/Logo"
import HamburgerMenu from "../UI/HamburgerMenu"

const Navbar = () => {
   const {
      size,
      handleOpenSidebar,
      handleCloseSidebar,
      isSidebarOpen,
      textContent
   } = useContext(AppContext);

   const { navigation } = textContent
   const [mainPage, ...restNavItem] = navigation
   const isHash = i => i.indexOf("#") > 0;

   const largeDevices = (
      <>
         <GlitchClip iterationCount="1">
            <Logo />
         </GlitchClip>
         <GlitchClip iterationCount="1">
            <ul className={styles.links}>
               {restNavItem.map(item => {
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
         <GlitchClip iterationCount="1">
            <Logo  
               handleCloseSidebar={handleCloseSidebar}
               isSidebarOpen={isSidebarOpen}
            />
         </GlitchClip>
         <GlitchClip iterationCount="1">
            <HamburgerMenu
               handleOpenSidebar={handleOpenSidebar}
               handleCloseSidebar={handleCloseSidebar}
               isSidebarOpen={isSidebarOpen}
            />
         </GlitchClip>
      </>
   )

   return (
      <header className={styles.navbar} id="nav">
         <nav className={styles.container}>
            {size > 1050 ? largeDevices : smallDevice}
         </nav>
      </header>
   )
}

export default Navbar
