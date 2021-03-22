import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SingleProject.module.scss'
import H2 from '../../UI/H2'
import Box from '../../UI/Box'
import Aside from '../../UI/Aside'
import Paragraph from '../../UI/Paragraph'
import html from '../../../assets/icon_html.svg'
import css from '../../../assets/icon_css.svg'
import gatsby from '../../../assets/icon_gatsby.svg'

const SingleProject = ({ nazwa, rodzaj, opis, photos, link }) => {
   const arrOfImages = [html, css, gatsby]

   return (
      <article className={styles.SingleProject}>
         <Link to={link} className={styles.link}>
            <Box align="center" justify="space-between" addClass={styles.box}>
               <H2 text={nazwa} />
               <Aside>{rodzaj}</Aside>
            </Box>

            <div className={styles.overlay}>
               <Paragraph addClass={styles.paragraph} text={opis}/>
               <hr />
               <div className={styles.iconsContainer}>
                  {arrOfImages.map((i, index) => {
                     return (
                        <img
                           src={i}
                           className={styles.icon}
                           alt=" "
                           key={index}
                        />
                        )
                  })}
               </div>
            </div>

            <img src={photos[0]} className={styles.projectImg} alt="project" />
         </Link>
      </article>
   )
}

export default SingleProject
