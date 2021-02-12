import React, { useContext } from 'react'
import styles from './About.module.scss'
import H1 from '../UI/H1'
import { AppContext } from '../../context/context'
import Box from '../UI/Box'

const About = ({text}) => {
   const { textContent } = useContext(AppContext)

   return (
      <section className={styles.About}>
         <Box
            justify="center"
            align="flex-start"
            column
         >
            <H1 text={text} />
         </Box>
      </section>
   )
}

export default About
