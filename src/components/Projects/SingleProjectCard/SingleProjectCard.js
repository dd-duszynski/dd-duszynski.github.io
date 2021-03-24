import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";
import styles from "././SingleProjectCard.module.scss";
import H2 from "../../UI/H2";
import Box from "../../UI/Box";
import Paragraph from "../../UI/Paragraph";
import SwitchIcon from "../../Technologies/TechnologyItem/SwitchIcon";

// Inspiracja
// https://codepen.io/vladracoare/pen/RwPrayL

const SingleProject = (item) => {
   const { title, role, description, photos, link } = item
   const {
      textContent: { technologies, projects },
      size
   } = useContext(AppContext);
   const arrOfTechnologies = technologies.all.filter(
      (i) => i.projects.findIndex((item) => item === title) >= 0
   );
   return (
      <article className={styles.SingleProject}>
         <Link to={link} className={styles.link}>
            <Box
               align="center"
               justify="space-between"
               addClass={styles.box}
            >
               <H2 text={title} />
            </Box>
            {
               size > 800 ? (
                  <>
                     <div className={styles.info} />
                     <Box
                        addClass={styles.overlay}
                        column
                        align="flex-start"
                        justify="flex-start"
                     >
                        <Paragraph
                           bold
                           addClass={styles.paragraph}
                           text={projects.roleInfo}
                        />
                        <Paragraph
                           addClass={styles.paragraph}
                           text={role}
                        />
                        <div className={styles.line} />
                        <Paragraph
                           bold
                           addClass={styles.paragraph}
                           text={projects.descriptionInfo}
                        />
                        <Paragraph
                           addClass={styles.paragraph}
                           text={description}
                        />
                        <div className={styles.line} />
                        <Paragraph
                           bold
                           addClass={styles.paragraph}
                           text={projects.technologyInfo}
                        />
                        <div className={styles.iconsContainer}>
                           {arrOfTechnologies.map((i) => (
                              <SwitchIcon name={i.name} />
                           ))}
                        </div>
                     </Box>
                  </>
               ) : null
            }
            <img
               src={photos[0]}
               className={styles.projectImg}
               alt="project"
            />
         </Link>
      </article>
   );
};

export default SingleProject;
