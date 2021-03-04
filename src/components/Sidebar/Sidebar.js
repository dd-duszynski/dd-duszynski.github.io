import React, { useContext } from "react"
import { AppContext } from "../../context/context"
import styles from "./Sidebar.module.scss"
import NavLinkItem from "../Navbar/NavLinkItem/NavLinkItem"

const Sidebar = () => {
   const { isSidebarOpen, handleCloseSidebar, textContent, handleLanguageChange, language } = useContext(AppContext)
   const { navigation } = textContent
   const [mainPage, ...restNavItem] = navigation
   const btnPLCSS = language === "PL" && styles.active;
   const btnENCSS = language === "EN" && styles.active;
   const isHash = i => i.indexOf("#") > 0;

   return (
      <aside
         className={
            isSidebarOpen
               ? `${styles.sidebar}`
               : `${styles.sidebar} ${styles.closeSidebar} `
         }
      >
         <section className={styles.linksContainer}>
            {restNavItem.map((item) => {
               if (isHash(item[1])) {
                  return (
                     <NavLinkItem
                        key={item[0]}
                        linkTo={item[1]}
                        onClickHandler={handleCloseSidebar}
                        hash
                     >
                        {item[0]}
                     </NavLinkItem>
                  )
               } else {
                  return (
                     <NavLinkItem
                        key={item[0]}
                        linkTo={item[1]}
                        onClickHandler={handleCloseSidebar}
                     >
                        {item[0]}
                     </NavLinkItem>
                  )
               }
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
