import React, { useContext } from "react";
import styles from "./About.module.scss";
import H1 from "../UI/H1";
import CardHeader from "../UI/CardHeader";
import Paragraph from "../UI/Paragraph";
import { AppContext } from "../../context/context";
import Box from "../UI/Box";

const About = () => {
   const { textContent } = useContext(AppContext);
   const { about } = textContent;

   return (
      <section className={styles.About}>
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.box}
            column
         >
            <Paragraph
               bold
               text={about.par1}
               addClass={styles.mainParagraph}
            />
            <Paragraph bold text={about.par2} addClass={styles.mainParagraph} />
            <Paragraph bold text={about.par3} addClass={styles.mainParagraph} />
         </Box>

         {/* Experience */}
         
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.career}
            column
         >
            <H1 text={about.expHeader} addClass={styles.h1} />
            <div className={styles.timelineExperience} />
            {about.experience.map((item, index, arr) => (
               <CardHeader
                  topHeader={item.topHeader}
                  bottomHeader={item.bottomHeader}
                  paragraphs={item.paragraphs}
                  last={index + 1 === arr.length}
               />
            ))}
         </Box>

         {/* Education */}
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.career}
            column
         >
            <H1 text={about.eduHeader} addClass={styles.h1} />
            <div className={styles.timelineEducation} />
            {about.education.map((item, index, arr) => (
               <CardHeader
                  topHeader={item.topHeader}
                  bottomHeader={item.bottomHeader}
                  paragraphs={item.paragraphs}
                  last={index + 1 === arr.length}
               />
            ))}
         </Box>
      </section>
   );
};

export default About;
