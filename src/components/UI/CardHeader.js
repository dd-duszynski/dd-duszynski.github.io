import React from 'react'
import styles from './CardHeader.module.scss'
import Paragraph from './Paragraph'

const CardHeader = ({ topHeader, bottomHeader, last, paragraphs }) => {
   return (
      <div className={styles.CardHeader}>
         <div className={styles.card}>
            <Paragraph
               text={topHeader}
               bold
            />
            <div className={styles.line} />
            <Paragraph
               text={bottomHeader}
               bold
            />
         </div>
         {paragraphs.map(item => (
            <Paragraph text={`• ${item}`} />
         ))}
         <div className={styles.dot1} />
         <div className={styles.dot2} />
         {
            last && <div className={styles.lastElement} />
         }
      </div>
   )
}

export default CardHeader
