import React, { useState } from 'react'
import Paragraph from '../../UI/Paragraph'
import styles from './FooterItem.module.scss'

const FooterItem = ({ url, icon, activeIcon, description, text }) => {
   const [isIconHover, setIsIconHover] = useState(false)
   const isIconHoverHandler = () => {
      isIconHover ? setIsIconHover(false) : setIsIconHover(true)
   }
   return (
      <a
         href={url}
         target="_blank"
         rel="noopener noreferrer"
         className={styles.FooterItem}
         onMouseEnter={isIconHoverHandler}
         onMouseLeave={isIconHoverHandler}
      >
         <img
            src={isIconHover ? activeIcon : icon}
            className={styles.image}
            alt={description}
         />
         {text && <Paragraph text={text} addClass={styles.paragraph}/>}
      </a>
   )
}

export default FooterItem
