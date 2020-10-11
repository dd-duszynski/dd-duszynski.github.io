import React from 'react'
import styles from './H1.module.scss'

const H1 = ({ text }) => {
   return (
      <header className={styles.H1}>
         <h1>{text}</h1>
      </header>
   )
}

export default H1
