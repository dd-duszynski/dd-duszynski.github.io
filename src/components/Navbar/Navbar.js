import React, { useContext } from "react"
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

   const biggerSize = (
      <>
         <Logo />
         <ul className={styles.links}>
            {navigation.map(item => {
               if (item[1].indexOf("#") > 0) {
                  return (
                     <li key={item[0]}>
                        <NavLinkItem linkTo={item[1]} hash={true}>
                           {item[0]}
                        </NavLinkItem>
                     </li>
                  )
               } else {
                  return (
                     <li key={item[0]}>
                        <NavLinkItem linkTo={item[1]}>
                           {item[0]}
                        </NavLinkItem>
                     </li>
                  )
               }
            })
            }
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
      <nav className={styles.navbar} id="nav">
         <div className={styles.container}>
            {size > 992 ? biggerSize : smallerSize}
         </div>
      </nav>
   )
}

export default Navbar
