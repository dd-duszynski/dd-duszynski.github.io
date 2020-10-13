import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import NavLinkItem from "./NavLinkItem/NavLinkItem"
import styles from "./Navbar.module.scss"
import Logo from "./Logo/Logo"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import PL from "../../textContent/PL"
import EN from "../../textContent/EN"

const Navbar = () => {
   const {
      size,
      handleOpenSidebar,
      handleCloseSidebar,
      isSidebarOpen,
      language,
      textContent
   } = useContext(AppContext);

   const text = language === "PL" ? PL : EN;

   const biggerSize = (
      <>
         <Logo />
         <ul className={styles.links}>
            {text.navigation.map(item => {
               return (
                  <li key={item[0]}>
                     <NavLinkItem linkTo={item[1]}>
                        {item[0]}
                     </NavLinkItem>
                  </li>
               )
            })}
         </ul>
      </>
   )

   const smallerSize = (
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
      <nav className={styles.navbar}>
         <div className={styles.navbar__container}>
            {size > 992 ? biggerSize : smallerSize}
         </div>
      </nav>
   )
}

export default Navbar
