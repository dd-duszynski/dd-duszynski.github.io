import React, { useContext, useState, useEffect } from "react";
import styles from "./TechnologyModal.module.scss";
import Box from "../../UI/Box";
import H1 from "../../UI/H1";
import H2 from "../../UI/H2";
import Paragraph from "../../UI/Paragraph";
import SwitchIcon from "../../UI/SwitchIcon";
import { BiLinkExternal } from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../../../context/context";

const findNextAndPrevIndex = (name, arr) => {
   const arrLength = arr.length;
   const currentTech = arr.findIndex((i) => i.name === name);
   let nextIndex, prevIndex;
   if (currentTech + 1 === arrLength) {
      //last
      nextIndex = 0;
      prevIndex = currentTech - 1;
   } else if (currentTech === 0) {
      //first
      nextIndex = 1;
      prevIndex = arrLength - 1;
   } else if (currentTech + 1 < arrLength) {
      //rest
      nextIndex = currentTech + 1;
      prevIndex = currentTech - 1;
   }
   return [nextIndex, prevIndex];
};

const TechnologyModal = ({ name, context }) => {
   const [choosenTechnology, setChoosenTechnology] = useState(name);
   const { handleModal } = useContext(AppContext);
   const technologies = context


   const [choosenContent] = technologies.filter(
      (i) => i.name === choosenTechnology
   );
   const [nextTechnologyIndex, prevTechnologyIndex] = findNextAndPrevIndex(
      choosenTechnology, technologies);

   const prevTechnology = technologies[prevTechnologyIndex].name;
   const nextTechnology = technologies[nextTechnologyIndex].name;

   useEffect(() => {
      const keyPressHandler = (e) => {
         if (e.keyCode === 37) {
            setChoosenTechnology(prevTechnology)
         } else if (e.keyCode === 39) {
            setChoosenTechnology(nextTechnology)
         } else if (e.keyCode === 27) {
            handleModal()
         }
      }
      document.addEventListener('keydown', keyPressHandler)
      return () => document.removeEventListener('keydown', keyPressHandler)
   })



   return (
      <div className={styles.TechnologyModal}>
         <Box addClass={styles.header} justify="space-between">
            <Box align="center">
               <SwitchIcon name={choosenTechnology} />
               <Box
                  column={choosenContent.fullName !== "" ? true : false}
                  align={choosenContent.fullName !== "" ? "flex-start" : "center"}
                  justify="flex-start"
                  addClass={styles.titlesBox}
               >
                  <H1 text={choosenContent.name} />
                  {choosenContent.fullName !== "" ?
                     <Paragraph
                        text={choosenContent.fullName}
                        addClass={styles.subtitle}
                     /> : null}
               </Box>
            </Box>
            <IoMdClose className={styles.closeBtn} onClick={handleModal} />
         </Box>
         <div className={styles.line} />
         <Box
            column
            align="flex-start"
            justify="flex-start"
            addClass={styles.descriptionBox}
         >
            <Paragraph
               text={choosenContent.description}
               addClass={styles.paragraph}
            />
            <H2 text="Dowiedz się więcej:" addClass={styles.h2} />
            {choosenContent.links.map((i) => (
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={i[1]}
                  className={styles.link}
                  key={i[1]}
               >
                  {i[2] === "yt" ? (
                     <GrYoutube className={styles.icon} />
                  ) : (
                     <BiLinkExternal className={styles.icon} />
                  )}
                  <Paragraph text={i[0]} addClass={styles.paragraphLink} />
               </a>
            ))}
         </Box>
         <div
            className={styles.leftBtn}
            onClick={() => setChoosenTechnology(prevTechnology)}
         >
            <RiArrowLeftSLine className={styles.iconLeftArrow} />
            {prevTechnology}
         </div>
         <div
            className={styles.rightBtn}
            onClick={() => setChoosenTechnology(nextTechnology)}
         >
            {nextTechnology}
            <RiArrowRightSLine className={styles.iconRightArrow} />
         </div>
      </div>
   );
};

export default TechnologyModal;
