import React from 'react'

import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {

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
