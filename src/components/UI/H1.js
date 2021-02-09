import React from 'react'
import styles from './H1.module.scss'

const H1 = ({ text, addClass }) => {
   return (
      <header className={[styles.H1, addClass].join(' ')}>
         <h1>{text}</h1>
      </header>
   )
}

export default H1
