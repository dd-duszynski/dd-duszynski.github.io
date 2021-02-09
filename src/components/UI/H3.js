import React from 'react'
import styles from './H3.module.scss'

const H3 = ({ text, hoverActive, addClass }) => {
   const css = hoverActive ?
      [styles.H3, styles.hoverActive, addClass].join(' ') :
      [styles.H3, addClass].join(' ');
   return (
      <header className={css}>
         <h3>{text}</h3>
      </header>
   )
}

export default H3
