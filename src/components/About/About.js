import React, { useContext } from "react";
import styles from "./About.module.scss";
import H2 from "../UI/H2";
import TimelineCard from "../UI/TimelineCard";
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
            <H2 text="O mnie:" addClass={styles.h1} />
            <Paragraph
               // bold
               text={about.par1}
            />
            <Paragraph
               text={about.par2}
            />
         </Box>
         {/* Experience */}
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.career}
            column
         >
            <H2 text={about.expHeader} addClass={styles.h1} />
            <div className={styles.timelineExperience} />
            {about.experience.map((item, index, arr) => (
               <TimelineCard
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
            addClass={styles.career}
            column
         >
            <H2 text={about.eduHeader} addClass={styles.h1} />
            <div className={styles.timelineEducation} />
            {about.education.map((item, index, arr) => (
               <TimelineCard
                  topHeader={item.topHeader}
                  bottomHeader={item.bottomHeader}
                  paragraphs={item.paragraphs}
                  isLast={index + 1 === arr.length}
               />
            ))}
         </Box>
      </section>
   );
};

export default About;
