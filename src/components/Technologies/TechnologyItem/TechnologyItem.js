import React, { useContext } from 'react'
import styles from './TechnologyItem.module.scss'
import SwitchIcon from './SwitchIcon'
import { AppContext } from '../../../context/context'

const TechnologyItem = ({ name, choosenItemHandler, isChoosen, modalToggleHandler }) => {
   const { size, textContent } = useContext(AppContext)
   const openModalHandler = (name) => {
      modalToggleHandler(name)
      choosenItemHandler(null)
   }

   const clickedHandler = () => {
      if (size < 600 && isChoosen === true) {
         openModalHandler(name)
      } else if (size < 600 && !isChoosen) {
         choosenItemHandler(name)
      } else if (size >= 600) {
         modalToggleHandler(name)
      }
   }

   return (
      <li
         className={isChoosen ? [styles.TechnologyItem, styles.TechnologyItemClicked].join(' ') : styles.TechnologyItem}
         onClick={clickedHandler}
      >
         <div className={styles.container}>
            <div className={styles.front}>
               <SwitchIcon name={name} />
               <span className={styles.title}>
                  {name}
               </span>

            </div>
            <div className={styles.back} >
               <span className={styles.title}>
                  {textContent.technologies.seeMore}
               </span>
            </div>
         </div>
      </li>
   )
}

export default TechnologyItem
