import React, { useState, useContext } from "react";
import styles from "./About.module.scss";
import H1 from "../UI/H1";
import H2 from "../UI/H2";
import H3 from "../UI/H3";
import H4 from "../UI/H4";
import TechnologyRow from "../Technologies/TechnologyRow/TechnologyRow";
import Paragraph from "../UI/Paragraph";
import { AppContext } from "../../context/context";
import Box from "../UI/Box";

const About = ({ text }) => {
   const { textContent } = useContext(AppContext);
   const { technologies } = textContent;
   const [showModal, setShowModal] = useState(false);
   const [modalContent, setModalContent] = useState(null);

   const handleModalToggle = (technology) => {
      setModalContent(technology);
      setShowModal(!showModal);
   };
   const closeModal = () => setShowModal(false);

   return (
      <section className={styles.About}>
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.box}
            column
         >
            <Paragraph text="Hello. I'm committed and self-motivated Front-end Developer with a great passion for UX/UI and web technologies. I'm  looking for a new opportunities to work with digital products that give real value and a great experience to users." />
            <Paragraph text="I am also a huge fan of football, especially the Italian Serie A (AC Milan)." />
         </Box>
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.box}
            column
         >
            <H1 text={"Doświadczenie: "} />
            <div className={styles.card}>
               <div className={styles.timeline}>

               </div>
               <div className={styles.cardHeader}>
                  <div className={styles.cardTop}>
                     Jul 2019 - Present
                  </div>
                  <div className={styles.line} />
                  <div className={styles.cardBottom}>
                     Frontend Developer - PrintXL
                  </div>
               </div>
               <Paragraph text="• Creation and development of a company website based on the Gatsby framework and Headless CMS Contentful" />
               <Paragraph text="• Stack: HTML / SCSS / JavaScript / React / Gatsby / Node.js / GraphQL / Contentful (CMS)" />
               <div className={styles.cardHeader}>
                  <div className={styles.cardTop}>
                     Jul 2019 - Present
                  </div>
                  <div className={styles.line} />
                  <div className={styles.cardBottom}>
                     Frontend Developer - PrintXL
                  </div>
               </div>
               <Paragraph text="• Creation and development of a system based on Excel and MySql for the company's production management" />
               <Paragraph text="• The system includes panels for employees and a dashboard for managers" />
               <Paragraph text="• Creation and implementation of new products with market analysis, calculation of production costs, and selection of optimal materials and finishes" />
               <div className={styles.cardHeader}>
                  <div className={styles.cardTop}>
                     Jul 2019 - Present
                  </div>
                  <div className={styles.line} />
                  <div className={styles.cardBottom}>
                     Frontend Developer - PrintXL
                  </div>
               </div>
               <Paragraph
                  text="• Work management and development of a seven-person department
               • Creating a group of scripts using JavaScript in Adobe programs, which automated and standardized the process of checking and preparing files for production of large-format printing."
               />
               <div className={styles.cardHeader}>
                  <div className={styles.cardTop}>
                     Jul 2019 - Present
                  </div>
                  <div className={styles.line} />
                  <div className={styles.cardBottom}>
                     Frontend Developer - PrintXL
                  </div>
               </div>
               <Paragraph
                  text="• Comprehensive preparation of graphic materials for large-format digital printing
               • Verifying the correctness of files sent by the client."
               />
            </div>

         </Box>
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.box}
            column
         >
            <H1 text={"Edukacja: "} addClass={styles.header_H1} />
            <H2
               addClass={styles.header_H2}
               text={"Digital UX [Coderslab - 320h]"}
            />
            <H2
               addClass={styles.header_H2}
               text={"Frontend Developer - React.js [Coderslab - 320h]"}
            />
            <H2
               addClass={styles.header_H2}
               text={"Master of Science - Geography [UAM Poznań]"}
            />
         </Box>
         <Box justify="center" align="flex-start" column>
            <TechnologyRow
               type="dev"
               handleModalToggle={handleModalToggle}
               headerText="Technologie:"
               technologies={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Redux",
                  "Gatsby",
                  "Node",
                  "Material UI",
                  "MySQL",
                  "Git",
                  "Github",
               ]}
            />
            <TechnologyRow
               type="design"
               handleModalToggle={handleModalToggle}
               headerText="Narzędzia:"
               technologies={[
                  "VSC",
                  "Adobe XD",
                  "Adobe Photoshop",
                  "Affinity Designer",
                  "Trello",
                  "Excel",
               ]}
            />
            <TechnologyRow
               type="others"
               handleModalToggle={handleModalToggle}
               headerText="Metodyka:"
               technologies={["UX/UI", "Kanban", "Scrum"]}
            />
         </Box>
      </section>
   );
};

export default About;
