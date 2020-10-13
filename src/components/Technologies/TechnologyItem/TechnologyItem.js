import React from 'react'
import styles from './TechnologyItem.module.scss'

const TechnologyItem = ({ name, children, onClick }) => {
   return (
      <li className={styles.TechnologyItem} onClick={onClick}>
         <div className={styles.container}>
            {children}
            {/* <img src={icon} alt={name} className={styles.icon} /> */}
            <p className={styles.title}>{name}</p>
         </div>
      </li>
   )
}

export default TechnologyItem
