import React from 'react'
import styles from './Paragraph.module.scss'

const Paragraph = ({ text, breakLine, addClass, bold }) => {
   const breakLineCSS = breakLine && styles.breakLine;
   const boldCSS = bold && styles.bold;
   return (
      <p className={[styles.Paragraph, breakLineCSS, boldCSS,  addClass].join(' ')}>
         {text}
      </p>
   )
}

export default Paragraph
