import React, {useContext} from 'react'
import SingleProject from './SingleProject/SingleProject'
import styles from './Projects.module.scss'
import H1 from '../UI/H1'
import {AppContext} from '../../context/context'

const Projects = () => {
   const {textContent} = useContext(AppContext)
   const {projects} = textContent;
   return (
      <section className={styles.Projects}>
         <H1 text={projects.title} />
         {projects.listOfProjects.map((item, index) => {
            return <SingleProject key={index} {...item} />
         })}
      </section>
   )
}

export default Projects
