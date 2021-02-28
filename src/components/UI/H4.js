import React from 'react'
import styles from './H4.module.scss'

const H4 = ({ text, hoverActive, addClass }) => {
   const css = hoverActive ?
      [styles.H4, styles.hoverActive, addClass].join(' ') :
      [styles.H4, addClass].join(' ');
   return (
      <header className={css}>
         <h4>{text}</h4>
      </header>
   )
}

export default H4
