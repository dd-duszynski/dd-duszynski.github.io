import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/context'
import styles from './Project.module.scss'
import H1 from '../UI/H1'
import H2 from '../UI/H2'
import Box from '../UI/Box'
import Paragraph from '../UI/Paragraph'
import TechnologyRow from '../Technologies/TechnologyRow/TechnologyRow'
import TechnologyModal from "../Technologies/TechnologyModal/TechnologyModal";
import Modal from "../UI/Modal";

const Project = ({ link }) => {
   const { textContent: { projects: { listOfProjects } } } = useContext(AppContext)
   const [project] = listOfProjects.filter(i => i.link === `/projects/${link}`)
   const [mainPhoto, ...photos] = project.photos;
   const [showModal, setShowModal] = useState(false);
   const [modalContent, setModalContent] = useState(null);
   const [choosenItem, setChoosenItem] = useState(null)
   const choosenItemHandler = (item) => {
      setChoosenItem(item)
   }
   const modalToggleHandler = (technology) => {
      setModalContent(technology);
      setShowModal(!showModal);
   };

   const closeModal = () => setShowModal(false);

   const modal = (
      <Modal show={showModal} onCancel={closeModal}>
         <TechnologyModal
            header={modalContent}
            technology={`technologies.${modalContent}`}
         />
      </Modal>
   );
   return (
      <>
         {modal}
         <main className={styles.Project} id="projects">
            <Box justify='space-between' align="center">
               <img className={styles.img} src={mainPhoto} />
            </Box>
            <Box justify='space-between' align="flex-start" column>
               <H1 text={project.nazwa} />
               <Paragraph
                  text={`Rola: Development & Design`}
               />
               <Paragraph
                  text={`Opis: ${project.opis}`}
               />
            </Box>
            <Box>
               <TechnologyRow
                  choosenItem={choosenItem}
                  choosenItemHandler={choosenItemHandler}
                  modalToggleHandler={modalToggleHandler}
                  headerText="Technologie"
                  technologies={project.technologies}
               />
            </Box>
            <Box justify='flex-start' align="flex-start" column>
               <H2 text='Ekrany' />
               {photos.map(i => (
                  <img className={styles.img} src={i} />
               ))}
            </Box>
         </main>
      </>
   )
}

export default Project
