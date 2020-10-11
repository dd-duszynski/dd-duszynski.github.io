import React from 'react'
import styles from './H3.module.scss'

const H3 = ({ text }) => {
   return (
      <header className={styles.H3}>
         <h3>{text}</h3>
      </header>
   )
}

export default H3
