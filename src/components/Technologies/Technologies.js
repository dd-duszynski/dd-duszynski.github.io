import React, { useState, useContext } from "react";
import styles from "./Technologies.module.scss";
import H1 from "../UI/H1";
import Modal from "../UI/Modal";
import { AppContext } from "../../context/context";
import Box from "../UI/Box";
import TechnologyRow from "./TechnologyRow/TechnologyRow";
import TechnologyModal from "./TechnologyModal/TechnologyModal";

const Technologies = () => {
   const { textContent } = useContext(AppContext);
   const { technologies } = textContent;
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
         <section className={styles.Technologies} id="tools">
            <Box justify="center" align="flex-start" column>
               <H1 text={technologies.header} addClass={styles.h1} />
               <TechnologyRow
                  choosenItem={choosenItem}
                  choosenItemHandler={choosenItemHandler}
                  modalToggleHandler={modalToggleHandler}
                  headerText={`• ${technologies.subheaders[0]}`}
                  technologies={[
                     "JavaScript",
                     "HTML",
                     "CSS",
                     "Material UI",
                     "React",
                     "Redux",
                     "Gatsby",
                     "Node",
                     "MySQL",
                     "Git",
                     "Github",
                     "VSC",
                  ]}
               />
               <TechnologyRow
                  choosenItem={choosenItem}
                  choosenItemHandler={choosenItemHandler}
                  modalToggleHandler={modalToggleHandler}
                  headerText={`• ${technologies.subheaders[1]}`}
                  technologies={[
                     "UX/UI",
                     "Adobe XD",
                     "Adobe Photoshop",
                     "Adobe Illustrator",
                     "Figma",
                     "Affinity Designer",
                     "Affinity Publisher",
                  ]}
               />
               <TechnologyRow
                  choosenItem={choosenItem}
                  choosenItemHandler={choosenItemHandler}
                  modalToggleHandler={modalToggleHandler}
                  headerText={`• ${technologies.subheaders[2]}`}
                  technologies={[
                     "Scrum",
                     "Kanban",
                     "Jira",
                     "Trello",
                     "Excel",
                  ]}
               />
            </Box>
         </section>
      </>
   );
};

export default Technologies;
