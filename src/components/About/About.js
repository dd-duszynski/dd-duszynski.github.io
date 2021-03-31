import React, { useContext } from "react";
import styles from "./About.module.scss";
import H1 from "../UI/H1";
import H2 from "../UI/H2";
import TimelineCard from "../UI/TimelineCard";
import Paragraph from "../UI/Paragraph";
import { AppContext } from "../../context/context";
import Box from "../UI/Box";
import BackToHomeLink from "../UI/BackToHomeLink";

const About = () => {
   const { textContent } = useContext(AppContext);
   const { about, projects } = textContent;

   return (
      <section className={styles.About}>
         {/* Introduction */}
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.introductionBox}
            column
         >
            <H1 text={about.header} addClass={styles.h1} />
            <Paragraph
               bold
               text={about.paragraph1}
               addClass={styles.paragraph1}
            />
            <Paragraph
               bold
               text={about.paragraph2}
            />
         </Box>
         {/* Experience */}
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.experienceBox}
            column
         >
            <H2 text={about.expHeader} addClass={styles.h2} />
            <div className={styles.timelineExperience} />
            {about.experience.map((item, index, arr) => (
               <TimelineCard
                  key={index}
                  topHeader={item.topHeader}
                  bottomHeader={item.bottomHeader}
                  paragraphs={item.paragraphs}
                  isLast={index + 1 === arr.length}
               />
            ))}
         </Box>

         {/* Education */}
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.educationBox}
            column
         >
            <H2 text={about.eduHeader} addClass={styles.h2} />
            <div className={styles.timelineEducation} />
            {about.education.map((item, index, arr) => (
               <TimelineCard
                  key={index}
                  topHeader={item.topHeader}
                  bottomHeader={item.bottomHeader}
                  paragraphs={item.paragraphs}
                  isLast={index + 1 === arr.length}
               />
            ))}
         </Box>
         <Box justify="flex-start">
            <BackToHomeLink text={projects.homeLink} />
         </Box>

      </section>
   );
};

export default About;
