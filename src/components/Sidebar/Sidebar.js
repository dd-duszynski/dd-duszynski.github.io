import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import styles from "./Sidebar.module.scss"
import NavLinkItem from "../Navbar/NavLinkItem/NavLinkItem"

const Sidebar = () => {
   const { isSidebarOpen, handleCloseSidebar, textContent, handleLanguageChange, language } = useContext(AppContext)
   const { navigation } = textContent
   const btnPLCSS = language === "PL" && styles.active;
   const btnENCSS = language === "EN" && styles.active;
   return (
      <aside
         className={
            isSidebarOpen
               ? `${styles.sidebar}`
               : `${styles.sidebar} ${styles.closeSidebar} `
         }
      >
         <section className={styles.linksContainer}>
            {navigation.map((item, index) => {
               return (
                  <NavLinkItem
                     key={index}
                     linkTo={item[1]}
                     onClickHandler={handleCloseSidebar}
                  >
                     {item[0]}
                  </NavLinkItem>
               )
            })}
            <div>
               <button
                  className={[styles.btn, btnPLCSS].join(' ')}
                  onClick={() => handleLanguageChange('PL')}
               >
                  PL
               </button>
               <button
                  className={[styles.btn, btnENCSS].join(' ')}
                  onClick={() => handleLanguageChange('EN')}
               >
                  EN
               </button>
            </div>
         </section>
      </aside>
   )
}

export default Sidebar