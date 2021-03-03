import React, { useState, useContext } from "react";
import styles from "./About.module.scss";
import H1 from "../UI/H1";
import CardHeader from "../UI/CardHeader";
import Paragraph from "../UI/Paragraph";
import { AppContext } from "../../context/context";
import Box from "../UI/Box";

const About = ({ text }) => {
   const { textContent } = useContext(AppContext);
   const { technologies } = textContent;


   return (
      <section className={styles.About}>
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.box}
            column
         >
            <Paragraph bold text="Hello. I'm committed and self-motivated Front-end Developer with a great passion for UX/UI and web technologies. I'm  looking for a new opportunities to work with digital products that give real value and a great experience to users." addClass={styles.mainParagraph} />
            <Paragraph bold text="I am also a huge fan of football, especially the Italian Serie A (AC Milan)." addClass={styles.mainParagraph} />
         </Box>

         {/* Career Summary */}
         <Box
            justify="flex-start"
            align="flex-start"
            addClass={styles.career}
            column
         >
            <H1 text={"Doświadczenie: "} addClass={styles.h1} />
            <div className={styles.timeline} />
            <CardHeader
               topHeader="Jul 2019 - Present"
               bottomHeader="Frontend Developer - PrintXL"
            >
               <Paragraph
                  text="• Creation and development of a company website based on the Gatsby framework and Headless CMS Contentful" />
               <Paragraph
                  text="• Stack: HTML / SCSS / JavaScript / React / Gatsby / Node.js / GraphQL / Contentful (CMS)" />
            </CardHeader>

            <CardHeader
               topHeader="Jul 2019 - Present"
               bottomHeader="Frontend Developer - PrintXL"
            >
               <Paragraph
                  text="• Creation and development of a system based on Excel and MySql for the company's production management" />
               <Paragraph
                  text="• The system includes panels for employees and a dashboard for managers" />
               <Paragraph
                  text="• Creation and implementation of new products with market analysis, calculation of production costs, and selection of optimal materials and finishes" />
            </CardHeader>

            <CardHeader
               topHeader="Jul 2019 - Present"
               bottomHeader="Frontend Developer - PrintXL"
            >
               <Paragraph
                  text="• Work management and development of a seven-person department"
               />
               <Paragraph
                  text="• Creating a group of scripts using JavaScript in Adobe programs, which automated and standardized the process of checking and preparing files for production of large-format printing."
               />
            </CardHeader>

            <CardHeader
               topHeader="Jul 2019 - Present"
               bottomHeader="Frontend Developer - PrintXL"
               last
            >
               <Paragraph
                  text="• Comprehensive preparation of graphic materials for large-format digital printing"
               />
               <Paragraph
                  text="• Verifying the correctness of files sent by the client."
               />
            </CardHeader>
         </Box>
      </section>
   );
};

export default About;
