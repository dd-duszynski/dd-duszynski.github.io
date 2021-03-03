import React from 'react'
import styles from './CardHeader.module.scss'
import Paragraph from './Paragraph'

const CardHeader = ({ children, topHeader, bottomHeader, last }) => {
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
         {children}
         <div className={styles.dot1} />
         <div className={styles.dot2} />
         {
            last && <div className={styles.lastElement} />
         }
      </div>
   )
}

export default CardHeader
