import React from 'react'
import styles from './TechnologyRow.module.scss'
import Box from '../../UI/Box'
import H2 from '../../UI/H2'
import TechnologyItem from "../TechnologyItem/TechnologyItem"
import { DiJavascript } from 'react-icons/di';
import { BiCodeAlt } from 'react-icons/bi'
import { GiPencilBrush } from 'react-icons/gi'
import { GoTools } from 'react-icons/go'

const TechnologyRow = ({ type, headerText, technologies, handleModalToggle }) => {
   let icon
   switch (type) {
      case 'dev':
         icon = <BiCodeAlt className={[styles.icon, styles.iconDev].join(' ')} />
         break
      case 'design':
         icon = <GiPencilBrush className={[styles.icon, styles.iconDesign].join(' ')} />
         break
      default:
         icon = <GoTools className={[styles.icon, styles.iconOthers].join(' ')} />
   }

   return (
      <article className={styles.TechnologyRow}>
         <Box
            justify="flex-start"
            align="center"
            addClass={styles.box}
         >
            {/* {icon} */}
            <H2 text={`- ${headerText}:`} />
         </Box>
         <ul className={styles.technologyList}>
            {technologies.map(item => (
               <TechnologyItem
                  key={item}
                  name={item}
                  onClick={() => handleModalToggle(item)}
               />
            ))}
         </ul>
      </article>
   )
}

export default TechnologyRow