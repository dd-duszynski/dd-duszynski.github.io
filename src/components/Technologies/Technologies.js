import React, { useState, useContext } from "react";
import styles from "./Technologies.module.scss";
import H1 from "../UI/H1";
import Modal from "../UI/Modal";
import { AppContext } from "../../context/context";
import Box from "../UI/Box";
import TechnologyRow from "./TechnologyRow/TechnologyRow";
import TechnologyModal from "./TechnologyModal/TechnologyModal";

const Technologies = () => {
   const { textContent, handleModal, isModalOpen } = useContext(AppContext);
   const { technologies } = textContent;
   const [modalContent, setModalContent] = useState(null);
   const [choosenItem, setChoosenItem] = useState(null)

   const choosenItemHandler = (item) => {
      setChoosenItem(item)
   }

   const modalToggleHandler = (technology) => {
      setModalContent(technology);
      handleModal();
   };


   // <Modal show={true} onCancel={handleModal}>
   const modal = (
      <Modal show={isModalOpen} onCancel={handleModal}>
         <TechnologyModal
            name={modalContent}
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
                  headerText={technologies.subheaders[0]}
                  technologies={[
                     "JavaScript",
                     "HTML",
                     "CSS",
                     "Sass",
                     "Material UI",
                     "React",
                     "Redux",
                     "Gatsby",
                     "Node",
                     "MySQL",
                     "Git",
                     "VSC",
                  ]}
               />
               <TechnologyRow
                  choosenItem={choosenItem}
                  choosenItemHandler={choosenItemHandler}
                  modalToggleHandler={modalToggleHandler}
                  headerText={technologies.subheaders[1]}
                  technologies={[
                     "Figma",
                     "Adobe XD",
                     "Adobe Photoshop",
                     "Adobe Illustrator",
                     "Affinity Designer",
                     "Affinity Publisher",
                  ]}
               />
               <TechnologyRow
                  choosenItem={choosenItem}
                  choosenItemHandler={choosenItemHandler}
                  modalToggleHandler={modalToggleHandler}
                  headerText={technologies.subheaders[2]}
                  technologies={[
                     "UX/UI",
                     "Scrum",
                     "Kanban",
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
