import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/context'

import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
   const { isModalOpen } = useContext(AppContext);
   // const [windowOffset, setWindowOffset] = useState(window.scrollY) 
   // const css = isModalOpen ? [styles.Layout, styles.LayoutFixed].join(' ') : styles.Layout;

   // window.scroll({
   //    top: 0,
   //    behavior: 'smooth'
   // });

   // useEffect(() => {
   //    console.log(windowOffset);
   //    if (isModalOpen) {
   //       console.log('otwarty');
   //       console.log(windowOffset);
   //       setWindowOffset(window.scrollY)
   //       document.body.style.position = 'fixed';
   //       document.body.style.paddingRight = '8px';
   //       document.body.style.top = `-${windowOffset}px`;
   //       window.scrollTo(0, 0);
   //    } else {
   //       console.log('zamknięty');
   //       document.body.style.paddingRight = '0';
   //       document.body.style.position = '';

   //       window.scrollTo(0, parseInt(windowOffset));
   //    }
   // }, [isModalOpen])

   return (
      <div className={styles.Layout}>
         <Navbar />
         <Sidebar />
         {children}
         <Footer />
      </div>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout
