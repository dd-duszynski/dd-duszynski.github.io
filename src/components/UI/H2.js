import React from 'react'
import styles from './H2.module.scss'

const H2 = ({ text, hoverActive }) => {
   const css = hoverActive ?
      [styles.H2, styles.hoverActive].join(' ') :
      styles.H2;
   return (
      <header className={css}>
         <h2>{text}</h2>
      </header>
   )
}

export default H2
