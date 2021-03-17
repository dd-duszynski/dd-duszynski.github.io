import React, {useContext} from 'react'
import styles from './TechnologyModal.module.scss'
import Box from '../../UI/Box'
import H1 from '../../UI/H1'
import H2 from '../../UI/H2'
import Paragraph from '../../UI/Paragraph'
import SwitchIcon from '../TechnologyItem/SwitchIcon'
import { BiLinkExternal } from 'react-icons/bi'
import {AppContext} from '../../../context/context'

const TechnologyModal = ({ name }) => {
   console.log(name);
   const {textContent: {technologies}} = useContext(AppContext)
   const [choosenContent] = technologies.all.filter(i => i.name === name)
   return (
      <div className={styles.TechnologyModal}>
         <Box addClass={styles.header} justify="space-between">
            <Box column align="flex-start">
               <H1 text={choosenContent.name} />
               <Paragraph
                  text={choosenContent.fullName}
                  addClass={styles.subtitle}
               />
            </Box>
            <SwitchIcon name={name} />
         </Box>
         <div className={styles.line} />
         <Paragraph
            text={choosenContent.description}
            addClass={styles.paragraph}
         />
         <H2
            text="Dowiedz się więcej:"
            addClass={styles.h2}
         />
         {choosenContent.links.map(i => (
            <a
               target="_blank"
               rel="noopener noreferrer"
               href={i[1]}
               className={styles.link}
               key={i[1]}
            >
               <BiLinkExternal className={styles.icon} />
               <Paragraph text={i[0]} />
            </a>
         ))}
      </div>
   )
}

export default TechnologyModal
