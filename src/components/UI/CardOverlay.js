import React from 'react'
import styles from './CardOverlay.module.scss'
import Paragraph from "./Paragraph";
import SwitchIcon from "./SwitchIcon";
import Box from "./Box";
import H3 from './H3'

const CardOverlay = ({ isHover, projects, role, shortDescription, technologies }) => {
   
   const cssInfo = isHover ? [styles.info, styles.infoVisible].join(' ') : styles.info;
   const cssOverlay = isHover ? [styles.overlay, styles.overlayVisible].join(' ') : styles.overlay;

   return (
      <>
         <div className={cssInfo} />
         <Box
            addClass={cssOverlay}
            column
            align="flex-start"
            justify="flex-start"
         >
            <H3 text={projects.roleInfo} />
            <Paragraph
               addClass={styles.paragraph}
               text={role}
            />
            <div className={styles.line}>
               <hr />
            </div>
            <H3 text={projects.descriptionInfo} />
            <Paragraph
               addClass={styles.paragraph}
               text={shortDescription}
            />
            <div className={styles.line}>
               <hr />
            </div>
            <H3 text={projects.technologyInfo} />
            <div className={styles.iconsContainer}>
               {technologies.map((i) => (
                  <SwitchIcon name={i.name} key={i.name} />
               ))}
            </div>
         </Box>
      </>
   )
}

export default CardOverlay
