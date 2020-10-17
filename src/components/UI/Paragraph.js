import React from 'react'
import styles from './Paragraph.module.scss'

const Paragraph = ({ text, breakLine }) => {
   return (
      <>
         <p className={styles.Paragraph}>
            {text}
         </p>
         {breakLine && <br />}
      </>
   )
}

export default Paragraph
