import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SingleProject.module.scss'
import H2 from '../../UI/H2'
import Box from '../../UI/Box'
import Paragraph from '../../UI/Paragraph'
import Aside from '../../UI/Aside'
import html from '../../../assets/icon_html.svg'
import css from '../../../assets/icon_css.svg'
import gatsby from '../../../assets/icon_gatsby.svg'

const SingleProject = ({ nazwa, rodzaj, opis, photo, link }) => {
   const arrOfImages = [html, css, gatsby]

   return (
      <article className={styles.SingleProject}>
         <Link to={link} className={styles.link}>
            <Box align="flex-start" justify="space-between">
               <H2 text={nazwa} addClass={styles.header} />
               <Aside>{rodzaj}</Aside>
            </Box>
               {/* <div className={styles.overlay}>
                  <p className={styles.paragraph}>
                     {opis}
                  </p>
                  <hr />
                  <div className={styles.iconsContainer}>
                     {arrOfImages.map((i, index) => {
                        return (
                           <img
                              src={i}
                              className={styles.icon}
                              alt=" "
                              key={index}
                           />)
                     })}
                  </div>
               </div> */}
               <img src={photo} className={styles.projectImg} />
         </Link>
      </article>
   )
}

export default SingleProject
