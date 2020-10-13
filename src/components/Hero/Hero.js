import React, { useContext } from "react"
import styles from "./Hero.module.scss"
import GlitchClip from 'react-glitch-effect/core/Clip';
import ScrollDown from './ScrollDown/ScrollDown';
import { AppContext } from "../../context/context"

const Hero = () => {
   const { textContent } = useContext(AppContext)
   const {hero} = textContent

   return (
      <section className={styles.Hero}>
          <GlitchClip iterationCount="2">
            <p>{hero[0]}</p>
            <br />
            <p>{hero[1]}</p>
            <br />
            <p>{hero[2]}</p>
            <br />
         </GlitchClip>
         <ScrollDown />
         <div className={styles.container}>
            <div className={styles.background} />
         </div>
      </section>
   )
}

export default Hero
