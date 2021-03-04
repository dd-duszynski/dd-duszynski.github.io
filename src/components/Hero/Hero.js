import React, { useContext } from "react"
import GlitchClip from 'react-glitch-effect/core/Clip';
import { NavHashLink } from 'react-router-hash-link';
import styles from "./Hero.module.scss"
import ScrollDown from './ScrollDown/ScrollDown';
import { AppContext } from "../../context/context"
import Paragraph from '../UI/Paragraph'
import Box from '../UI/Box'
const Hero = () => {
   const { textContent } = useContext(AppContext)
   const { hero } = textContent

   return (
      <section className={styles.Hero} id="hero">
         <div className={styles.background} />
         <Box
            addClass={styles.box}
            justify="center"
            align="center"
            column
         >
            <GlitchClip iterationCount="1" className={styles.glitchContainer}>
               <Paragraph
                  addClass={styles.paragraph}
                  text={hero[0]}
                  breakLine
               />
               <Paragraph
                  addClass={styles.paragraph}
                  text={hero[1]}
                  breakLine
               />
               <Paragraph
                  addClass={[styles.paragraph, styles.inlineParagraph].join(' ')}
                  text={hero[2]}
                  breakLine
               />
               <NavHashLink
                  smooth
                  exact to={"/#contact"}
                  className={styles.link}
               >
                  {hero[3]}
               </NavHashLink>.
            </GlitchClip>
            <ScrollDown />
         </Box>
      </section>
   )
}

export default Hero
