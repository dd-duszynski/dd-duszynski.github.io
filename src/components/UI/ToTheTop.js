import React from 'react'
import { BsArrow90DegUp } from 'react-icons/bs'
import Box from './Box'
import Paragraph from './Paragraph';
import styles from './ToTheTop.module.scss'
import { NavHashLink } from 'react-router-hash-link';

const ToTheTop = () => {
   
   return (
      <NavHashLink
         smooth
         exact to={"#hero"}
      // className={styles.toTheTop}
      >
         <Box
            addClass={styles.toTheTop}
            justify="flex-end"
            align="flex-end"
         >
            <BsArrow90DegUp className={styles.icon} />
            <Paragraph text="Powrót na górę" addClass={styles.paragraph} />
         </Box>
      </NavHashLink>
   )
}

export default ToTheTop
