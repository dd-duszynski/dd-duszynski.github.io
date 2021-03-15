import React, { useEffect, useState } from "react"
import PL from '../textContent/PL'
import EN from '../textContent/EN'

const AppContext = React.createContext()

const AppProvider = ({ children, lang }) => {
   const [size, setSize] = useState(null)
   const [isSidebarOpen, setSidebar] = useState(false)
   const [isModalOpen, setModal] = useState(false)
   const [language, setLanguage] = useState(lang)

   useEffect(() => {
      if (window) {
         setSize(window.innerWidth)
         window.addEventListener("resize", () => {
            setSize(window.innerWidth)
         })
      }
      return () => {
         window.removeEventListener("resize", () => { })
         window.removeEventListener("scroll", () => { })
      }
   }, [])

   const handleOpenSidebar = () => {
      setSidebar(true)
   }
   const handleCloseSidebar = () => {
      setSidebar(false)
   }
   const handleModal = () => {
      setModal(!isModalOpen)
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
            size,
            isSidebarOpen,
            language,
            handleCloseSidebar,
            handleOpenSidebar,
            handleLanguageChange,
            isModalOpen,
            handleModal
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export { AppProvider, AppContext }
