import React, {useContext} from 'react'
import { BsArrow90DegUp } from 'react-icons/bs'
import { AppContext } from '../../context/context'
import Box from './Box'
import Paragraph from './Paragraph';
import styles from './ToTheTop.module.scss'

const ToTheTop = () => {
   const {textContent: {footer}} = useContext(AppContext)
   const smothScroll = () => {
      window.scroll({
         top: 0,
         behavior: 'smooth'
      });
   }
   return (
      <Box
         addClass={styles.toTheTop}
         justify="flex-end"
         align="flex-end"
         onClick={smothScroll}
      >
         <BsArrow90DegUp className={styles.icon} />
         <Paragraph text={footer.toTheTop} addClass={styles.paragraph} />
      </Box>
   )
}

export default ToTheTop
