import React, { useContext } from 'react'
import { AppContext } from '../../context/context'

import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
   const { isModalOpen } = useContext(AppContext);
   const css = isModalOpen ? [styles.Layout, styles.LayoutFixed].join(' ') : styles.Layout;

   return (
      <div className={css}>
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
