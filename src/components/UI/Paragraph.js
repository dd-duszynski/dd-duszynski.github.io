import React from 'react'
import styles from './Paragraph.module.scss'

const Paragraph = ({ text, breakLine }) => {
   const breakLineCSS = breakLine && styles.breakLine;

   return (
      <p className={[styles.Paragraph, breakLineCSS].join(' ')}>
         {text}
      </p>
   )
}

export default Paragraph
