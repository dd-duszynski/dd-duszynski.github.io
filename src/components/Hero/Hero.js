import React, { useContext } from "react"
import styles from "./Hero.module.scss"
import GlitchClip from 'react-glitch-effect/core/Clip';
import ScrollDown from './ScrollDown/ScrollDown';
import { AppContext } from "../../context/context"
import Paragraph from '../UI/Paragraph'
import Box from '../UI/Box'

const Hero = () => {
   const { textContent } = useContext(AppContext)
   const { hero } = textContent

   return (
      <section className={styles.Hero} id="hero">
         <Box
            addClass={styles.box}
            justify="center"
            align="center"
            column
         >
            <GlitchClip iterationCount="1">
               <Paragraph
                  text={hero[0]}
                  breakLine
               />
               <Paragraph
                  text={hero[1]}
                  breakLine
               />
               <Paragraph
                  text={hero[2]}
                  breakLine
               />
            </GlitchClip>
            <ScrollDown />
            <div className={styles.background} />
         </Box>
      </section>
   )
}

export default Hero
