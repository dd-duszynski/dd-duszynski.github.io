import React from 'react'
import styles from './TechnologyItem.module.scss'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiJavascript } from 'react-icons/di';
import { GrGatsbyjs, GrNode } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiMaterialUi, SiMysql } from 'react-icons/si';

const TechnologyItem = ({ name, onClick }) => {
   let icon;
   switch (name) {
      case 'react':
         icon = <FaReact />
         break
      case 'html':
         icon = <AiFillHtml5 />
         break
      case 'github':
         icon = <AiFillGithub />
         break
      case 'css':
         icon = <DiCss3 />
         break
      case 'scss':
         icon = <DiSass />
         break
      case 'js':
         icon = <DiJavascript />
         break
      case 'node':
         icon = <GrNode />
         break
      case 'gatsby':
         icon = <GrGatsbyjs />
         break
      case 'redux':
         icon = <SiRedux />
         break
      case 'mysql':
         icon = <SiMysql />
         break
      case 'material-ui':
         icon = <SiMaterialUi />
         break
      default:
         icon = <SiRedux />
   }

   return (
      <li className={styles.TechnologyItem} onClick={onClick}>
         <div className={styles.container}>
            {icon}
            <p className={styles.title}>{name}</p>
         </div>
      </li>
   )
}

export default TechnologyItem
