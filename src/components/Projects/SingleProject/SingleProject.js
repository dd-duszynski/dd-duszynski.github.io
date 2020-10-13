import React from 'react'
// import Image from 'gatsby-image'
import styles from './SingleProject.module.scss'
import H2 from '../../UI/H2'
import html from '../../../assets/icon_html.svg'
import css from '../../../assets/icon_css.svg'
import gatsby from '../../../assets/icon_gatsby.svg'

const SingleProject = ({ nazwa, rodzaj, opis, photo }) => {
   const arrOfImages = [html, css, gatsby]
   
   return (
      <article className={styles.SingleProject}>
         <H2 text={nazwa} />
         <aside>{`{${rodzaj}}`}</aside>
         <div className={styles.overlay}>
            <p className={styles.paragraph}>{opis}</p>
            <hr />
            <div className={styles.iconsContainer}>
               {arrOfImages.map((i, index) => {
                  return <img src={i} className={styles.icon} alt=" " key={index}/>
               })}
            </div>
         </div>
         <img src={photo} className={styles.projectImg} />
      </article>
   )
}

export default SingleProject
