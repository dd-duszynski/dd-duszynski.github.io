import React, { useContext } from "react"
import styles from "./Hero.module.scss"
import GlitchClip from 'react-glitch-effect/core/Clip';
import ScrollDown from './ScrollDown/ScrollDown';
import { AppContext } from "../../context/context"
import Paragraph from '../UI/Paragraph'
const Hero = () => {
   const { textContent } = useContext(AppContext)
   const {hero} = textContent

   return (
      <section className={styles.Hero}>
          <GlitchClip iterationCount="2">
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
         <div className={styles.container}>
            <div className={styles.background} />
         </div>
      </section>
   )
}

export default Hero
