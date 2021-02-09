import React from 'react'
import styles from './Paragraph.module.scss'

const Paragraph = ({ text, breakLine, addClass }) => {
   const breakLineCSS = breakLine && styles.breakLine;

   return (
      <p className={[styles.Paragraph, breakLineCSS, addClass].join(' ')}>
         {text}
      </p>
   )
}

export default Paragraph
