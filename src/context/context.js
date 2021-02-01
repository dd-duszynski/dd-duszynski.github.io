import React, { useEffect, useState } from "react"
import PL from '../textContent/PL'
import EN from '../textContent/EN'

const AppContext = React.createContext()

const AppProvider = ({ children, lang }) => {
   // const [size, setSize] = useState(null)
   // const [height, setHeight] = useState(null)
   const [isSidebarOpen, setSidebar] = useState(false)
   const [language, setLanguage] = useState(lang)
   
   // useEffect(() => {
   //    if (window) {
   //       setSize(window.innerWidth)
   //       setHeight(window.pageYOffset)
   //       window.addEventListener("resize", () => {
   //          setSize(window.innerWidth)
   //       })
   //       window.addEventListener("scroll", () => {
   //          setHeight(window.pageYOffset)
   //       })
   //    }
   //    return () => {
   //       window.removeEventListener("resize", () => { })
   //       window.removeEventListener("scroll", () => { })
   //    }
   // }, [])

   const handleOpenSidebar = () => {
      setSidebar(true)
   }
   const handleCloseSidebar = () => {
      setSidebar(false)
   }
   const handleLanguageChange = (lng) => {
      localStorage.setItem('lang', lng)
      setLanguage(lng)
   }

   const textContent = language === "PL" ? PL : EN;

   return (
      <AppContext.Provider
         value={{
            textContent,
            // size,
            // height,
            isSidebarOpen,
            language,
            handleCloseSidebar,
            handleOpenSidebar,
            handleLanguageChange
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export { AppProvider, AppContext }
