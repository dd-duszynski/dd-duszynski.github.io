import React, { useContext } from "react"
import GlitchClip from 'react-glitch-effect/core/Clip';
import { AppContext } from "../../context/context"
import NavLinkItem from "./NavLinkItem/NavLinkItem"
import styles from "./Navbar.module.scss"
import Logo from "../UI/Logo"
import Box from "../UI/Box"
import HamburgerMenu from "../UI/HamburgerMenu"

const Navbar = () => {
   const {
      size,
      handleOpenSidebar,
      handleCloseSidebar,
      isSidebarOpen,
      textContent,
      language,
      handleLanguageChange
   } = useContext(AppContext);

   const { navigation } = textContent
   // eslint-disable-next-line
   const [mainPage, ...restNavItem] = navigation
   const btnPLCSS = language === "PL" && styles.active;
   const btnENCSS = language === "EN" && styles.active;
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
               <Box addClass={styles.btnBox}>
                  <button
                     className={[styles.btn, btnPLCSS].join(' ')}
                     onClick={() => handleLanguageChange('PL')}
                  >
                     PL
                  </button>
                  /
                  <button
                     className={[styles.btn, btnENCSS].join(' ')}
                     onClick={() => handleLanguageChange('EN')}
                  >
                     EN
                  </button>
               </Box>
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
