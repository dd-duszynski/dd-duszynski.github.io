import React from 'react'
import styles from './TechnologyRow.module.scss'
import H2 from '../../UI/H2'
import TechnologyItem from "../TechnologyItem/TechnologyItem"
import { DiJavascript } from 'react-icons/di';

const TechnologyRow = ({ headerText, technologies, handleModalToggle }) => {
   return (
      <article className={styles.TechnologyRow}>
         <H2 text={headerText} />
         <ul className={styles.technologyList}>
            {technologies.map(item => (
               <TechnologyItem
                  key={item}
                  name={item}
                  onClick={() => handleModalToggle(item)}
               >
                  <DiJavascript />
               </TechnologyItem>

            ))}
         </ul>
      </article>
   )
}

export default TechnologyRow
