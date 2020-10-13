import React, { useState, useContext } from 'react'
import styles from './Technologies.module.scss'
import TechnologyItem from './TechnologyItem/TechnologyItem'
import H1 from '../UI/H1'
import H2 from '../UI/H2'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiJavascript, DiScrum, DiTrello } from 'react-icons/di';
import { GrGatsbyjs, GrNode } from 'react-icons/gr';
import { GiPencilBrush } from 'react-icons/gi';
import { CgFigma } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAffinitydesigner, SiAffinitypublisher, SiVisualstudiocode, SiJira, SiMicrosoftexcel } from 'react-icons/si';
import Modal from '../UI/Modal'
import {AppContext} from '../../context/context'

const Technologies = () => {
   const { textContent } = useContext(AppContext)
   const {technologies} = textContent
   const [showModal, setShowModal] = useState(false);
   const [modalContent, setModalContent] = useState(null);

   const handleModalToggle = (technology) => {
      setModalContent(technology)
      setShowModal(!showModal)
   }
   const closeModal = () => setShowModal(false);

   const modal = (
      <Modal
         show={showModal}
         header={modalContent}
         onCancel={closeModal}
         technology={`technologies.${modalContent}`}
      />
   )

   return (
      <>
         {modal}
         <section className={styles.Technologies} id="tools">
            <H1 text={`Tools & Technologies`} />
            <article>
               <H2 text="Development" />
               <ul className={styles.technologyList}>
                  <TechnologyItem 
                     name="HTML" 
                     onClick={() => handleModalToggle("HTML")}
                     >
                     <AiFillHtml5 />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="CSS"
                     onClick={() => handleModalToggle("CSS")}
                  >
                     <DiCss3 />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="JavaScript"
                     onClick={() => handleModalToggle("JavaScript")}
                  >
                     <DiJavascript />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Node"
                     onClick={() => handleModalToggle("Node")}
                  >
                     <GrNode />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="React"
                     onClick={() => handleModalToggle("React")}
                  >
                     <FaReact />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Redux"
                     onClick={() => handleModalToggle("Redux")}
                  >
                     <SiRedux />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Gatsby"
                     onClick={() => handleModalToggle("Gatsby")}
                  >
                     <GrGatsbyjs />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="GIT"
                     onClick={() => handleModalToggle("GIT")}
                  >
                     <AiFillGithub />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="SASS"
                     onClick={() => handleModalToggle("SASS")}
                  >
                     <DiSass />
                  </TechnologyItem>
               </ul>
            </article>

            <article>
               <H2 text="Design" />
               <ul 
                  className={styles.technologyList}
               >
                  <TechnologyItem 
                     name="Adobe XD"
                     onClick={() => handleModalToggle("XD")}
                  >
                     <SiAdobexd />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Adobe Photoshop"
                     onClick={() => handleModalToggle("Photoshop")}
                  >
                     <SiAdobephotoshop />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Adobe Illustrator"
                     onClick={() => handleModalToggle("Illustrator")}
                  >
                     <SiAdobeillustrator />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Figma"
                     onClick={() => handleModalToggle("Figma")}
                  >
                     <CgFigma />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Affinity Designer"
                     onClick={() => handleModalToggle("Designer")}
                  >
                     <SiAffinitydesigner />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Affinity Publisher"
                     onClick={() => handleModalToggle("Publisher")}
                  >
                     <SiAffinitypublisher />
                  </TechnologyItem>
               </ul>
            </article>

            <article>
               <H2 text="Others" />
               <ul 
                  className={styles.technologyList}
               >
                  <TechnologyItem 
                     name="UX/UI"
                     onClick={() => handleModalToggle("UI")}
                  >
                     <GiPencilBrush />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Scrum"
                     onClick={() => handleModalToggle("Scrum")}
                  >
                     <DiScrum />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="VSC"
                     onClick={() => handleModalToggle("VSC")}
                  >
                     <SiVisualstudiocode
                     />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Jira"
                     onClick={() => handleModalToggle("Jira")}
                  >
                     <SiJira />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Trello"
                     onClick={() => handleModalToggle("Trello")}
                  >
                     <DiTrello />
                  </TechnologyItem>
                  <TechnologyItem 
                     name="Excel"
                     onClick={() => handleModalToggle("Excel")}
                  >
                     <SiMicrosoftexcel />
                  </TechnologyItem>
               </ul>
            </article>
         </section>
      </>
   )
}

export default Technologies