import React from 'react'
import styles from './H3.module.scss'

const H3 = ({ text, hoverActive }) => {
   const css = hoverActive ?
      [styles.H3, styles.hoverActive].join(' ') :
      styles.H3;
   return (
      <header className={css}>
         <h3>{text}</h3>
      </header>
   )
}

export default H3
