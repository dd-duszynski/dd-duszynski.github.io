import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { BiLinkExternal } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { AppContext } from "../../context/context";
import styles from "./Project.module.scss";
import H1 from "../UI/H1";
import H2 from "../UI/H2";
import Box from "../UI/Box";
import Paragraph from "../UI/Paragraph";
import TechnologyRow from "../Technologies/TechnologyRow/TechnologyRow";
import TechnologyModal from "../Technologies/TechnologyModal/TechnologyModal";
import Modal from "../UI/Modal";
import BackToHomeLink from "../UI/BackToHomeLink";

const Project = ({ link }) => {
   const {
      textContent: {
         projects,
         listOfProjects,
         listOfTechnologies,
      },
      handleModal,
      isModalOpen,
   } = useContext(AppContext);

   const [project] = listOfProjects.filter(
      (i) => i.link === `/projects/${link}`
   );
   const [mainPhoto, smartphonePhoto, ...otherPhotos] = project.photos;
   const [modalContent, setModalContent] = useState(null);
   const [choosenItem, setChoosenItem] = useState(null);

   const choosenItemHandler = (item) => {
      setChoosenItem(item);
   };

   const modalToggleHandler = (technology) => {
      setModalContent(technology);
      handleModal();
   };

   const arrOfTechnologies = listOfTechnologies.filter(
      (i) => i.projects.findIndex((item) => item === project.title) >= 0
   );

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>
               {`${project.title} | Damian Duszyński`}
            </title>
            <meta name="description" content={project.shortDescription} />
            <link rel="canonical" href={`https://dd-duszynski.pl${project.link}`} />
         </Helmet>
         <Modal show={isModalOpen} onCancel={handleModal}>
            <TechnologyModal
               name={modalContent}
               context={arrOfTechnologies}
            />
         </Modal>
         <main className={styles.Project} id="projects">
            <Box justify="space-between" align="flex-start" column>
               {/* Main Photo */}
               <Box>
                  <img
                     className={styles.mainPhoto}
                     src={mainPhoto}
                     alt="main img"
                  />
               </Box>
               {/* Main Header */}
               <Box justify="space-between" addClass={styles.header}>
                  <H1 text={project.title} />
                  <Box
                     align="flex-end"
                     justify="flex-end"
                     addClass={styles.linkBox}
                  >
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.externalLink}
                        className={styles.externalLink}
                     >
                        <Paragraph text="Link" />
                        <BiLinkExternal className={styles.icon} />
                     </a>
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.repository}
                        className={styles.externalLink}
                     >
                        <Paragraph text="Github" />
                        <SiGithub className={styles.icon} />
                     </a>
                  </Box>
               </Box>
               <div className={styles.line}>
                  <hr />
               </div>
               {/* Role */}
               <Box
                  justify="flex-start"
                  align="flex-start"
                  column
                  addClass={styles.paragraphBox}
               >
                  <H2 text={projects.roleInfo} addClass={styles.h2} />
                  <Paragraph text={project.role} />
               </Box>
               {/* Description */}
               <Box
                  justify="flex-start"
                  align="flex-start"
                  column
                  addClass={styles.paragraphBox}
               >
                  <H2
                     text={projects.descriptionInfo}
                     addClass={styles.h2}
                  />
                  {project.description.map((item) => (
                     <Paragraph
                        text={item}
                        key={item}
                        addClass={styles.paragraph}
                     />
                  ))}
               </Box>

               {/* Screens */}
               <Box column align="flex-start">
                  <H2 text={projects.screens} addClass={styles.h2} />
                  <img
                     src={otherPhotos[0]}
                     alt=""
                     className={styles.screen}
                  />
                  <img
                     src={smartphonePhoto}
                     alt=""
                     className={styles.screen}
                  />
               </Box>

               {/* Tools & Technology */}
               <Box>
                  <TechnologyRow
                     choosenItem={choosenItem}
                     choosenItemHandler={choosenItemHandler}
                     modalToggleHandler={modalToggleHandler}
                     headerText={projects.technologyInfo}
                     technologies={arrOfTechnologies}
                  />
               </Box>
               {/* Description2 */}
               <Box
                  justify="flex-start"
                  align="flex-start"
                  column
                  addClass={styles.paragraphBox}
               >
                  <H2
                     text={projects.description2Info}
                     addClass={styles.h2}
                  />
                  {project.description2.map((item) => (
                     <Paragraph
                        text={item}
                        key={item}
                        addClass={styles.paragraph}
                     />
                  ))}
               </Box>
               {/* Smartphone Photos */}
               <Box column align="flex-start">
                  <img
                     src={otherPhotos[1]}
                     alt=""
                     className={styles.screen}
                  />
               </Box>
               {/* Back To Home Page */}
               <Box justify="flex-start">
                  <BackToHomeLink text={projects.homeLink} />
               </Box>
            </Box>
         </main>
      </>
   );
};

export default Project;
