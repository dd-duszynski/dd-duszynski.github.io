import React from 'react'
import styles from './TechnologyItem.module.scss'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiJavascript } from 'react-icons/di';
import { GrGatsbyjs, GrNode, GrMysql } from 'react-icons/gr';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiRedux, SiMaterialUi, SiMysql } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';
import { DiScrum, DiTrello } from 'react-icons/di';
import { GiPencilBrush } from 'react-icons/gi';
import { CgFigma } from 'react-icons/cg';
import { GoLinkExternal } from 'react-icons/go';
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAffinitydesigner, SiAffinitypublisher, SiVisualstudiocode, SiMicrosoftexcel } from 'react-icons/si';
import H3 from '../../UI/H3'

const SwitchIcon = ({ name }) => {
   let icon;
   switch (name) {
      case 'JavaScript':
         icon = <DiJavascript />
         break
      case 'HTML':
         icon = <AiFillHtml5 />
         break
      case 'CSS':
         icon = <DiCss3 />
         break
      case 'Material UI':
         icon = <SiMaterialUi />
         break
      // case 'Sass':
      //    icon = <DiSass />
      //    break
      case 'React':
         icon = <FaReact />
         break
      case 'Redux':
         icon = <SiRedux />
         break
      case 'Gatsby':
         icon = <GrGatsbyjs />
         break
      case 'Node':
         icon = <GrNode />
         break
      case 'MySQL':
         icon = <GrMysql />
         break
      case 'Git':
         icon = <FaGitAlt />
         break
      case 'Github':
         icon = <AiFillGithub />
         break
      case 'VSC':
         icon = <SiVisualstudiocode />
         break
      // Design
      case 'UX/UI':
         icon = <GiPencilBrush />
         break
      case 'Adobe XD':
         icon = <SiAdobexd />
         break
      case 'Adobe Photoshop':
         icon = <SiAdobephotoshop />
         break
      case 'Adobe Illustrator':
         icon = <SiAdobeillustrator />
         break
      case 'Figma':
         icon = <CgFigma />
         break
      case 'Affinity Designer':
         icon = <SiAffinitydesigner />
         break
      case 'Affinity Publisher':
         icon = <SiAffinitypublisher />
         break
      // Others
      case 'Scrum':
         icon = <DiScrum />
         break
      case 'Kanban':
         icon = <BsKanban />
         break

      case 'Trello':
         icon = <DiTrello />
         break
      case 'Excel':
         icon = <SiMicrosoftexcel />
         break
      default:
         icon = <SiRedux />
   }
   return icon
}

const TechnologyItem = ({ name, onClick }) => {
   return (
      <li className={styles.TechnologyItem} onClick={onClick}>
         <div className={styles.container}>
            <div className={styles.front}>
               <SwitchIcon name={name} />
               <H3 text={name} addClass={styles.title} />
            </div>
            <div className={styles.back} >
               Zobacz więcej
            </div>
         </div>
      </li>
   )
}

export default TechnologyItem
