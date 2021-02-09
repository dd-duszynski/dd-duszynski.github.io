import React from 'react'
import styles from './H2.module.scss'

const H2 = ({ text, hoverActive, addClass }) => {
   const css = hoverActive ?
      [styles.H2, styles.hoverActive, addClass].join(' ') :
      [styles.H2, addClass].join(' ');
   return (
      <header className={css}>
         <h2>{text}</h2>
      </header>
   )
}

export default H2
