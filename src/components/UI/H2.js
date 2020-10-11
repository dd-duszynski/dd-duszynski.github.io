import React from 'react'
import styles from './H2.module.scss'

const H2 = ({ text }) => {
   return (
      <header className={styles.H2}>
         <h2>{text}</h2>
      </header>
   )
}

export default H2
