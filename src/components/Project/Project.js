import React, { useContext } from 'react'
import { AppContext } from '../../context/context'
import styles from './Project.module.scss'
import H1 from '../UI/H1'
import H2 from '../UI/H2'
import Box from '../UI/Box'
import Paragraph from '../UI/Paragraph'
import TechnologyItemTest from '../Technologies/TechnologyItem/TechnologyItemTest'
// import { AiFillHtml5 } from 'react-icons/ai';
// import MaterialsItem from './MaterialsItem/MaterialsItem'

const Project = ({ link }) => {
   const { textContent: { projects: { listOfProjects } } } = useContext(AppContext)
   const [project] = listOfProjects.filter(i => i.link === `/projects/${link}`)
   console.log(project);
   return (
      <main className={styles.Project}>
         <Box justify='space-between' align="center">
            <H1 text={project.nazwa} />
            <Paragraph
               text={`{dev & design}`}
            />
         </Box>
         <img className={styles.img} src={project.photos[0]} />
         <Paragraph
            text={project.opis}
            breakLine
         />
         <Paragraph
            text={project.opis}
            breakLine
         />
         <H2 text="Wykorzystane technologie" />
         <ul className={styles.technologyList}>
            <Box justify='flex-start' align="center">
               {project.technologies.map(i => (
                  <TechnologyItemTest
                     key={i}
                     name={i}
                  />
               )
               )}
            </Box>
         </ul>
         <H2 text='Ekrany' />
         {project.photos.map(i => (
            <img className={styles.img} src={i} />
         ))}
      </main>
   )
}

export default Project
