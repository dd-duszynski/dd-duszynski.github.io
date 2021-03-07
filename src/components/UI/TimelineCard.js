import React from 'react'
import styles from './TimelineCard.module.scss'
import Paragraph from './Paragraph'

const TimelineCard = ({ topHeader, bottomHeader, isLast, paragraphs }) => {
   return (
      <div className={styles.TimelineCard}>
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
            <div className={styles.dot1} />
            <div className={styles.dot2} />
         </div>
         {paragraphs.map(item => (
            <Paragraph text={`• ${item}`} />
         ))}
         {
            isLast && <div className={styles.lastElement} />
         }
      </div>
   )
}

export default TimelineCard
