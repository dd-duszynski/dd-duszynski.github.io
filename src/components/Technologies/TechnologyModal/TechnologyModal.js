import React from 'react'
import styles from './TechnologyModal.module.scss'
const TechnologyModal = ({ header, technology }) => {
   return (
      <div className={styles.TechnologyModal}>
         <header className={styles.header}>
            <h2>{header}</h2>
         </header>
         <article>
            <p>{technology}</p>
         </article>
      </div>
   )
}

export default TechnologyModal
