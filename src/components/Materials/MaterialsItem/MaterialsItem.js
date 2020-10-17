import React from 'react'
import styles from './MaterialsItem.module.scss'
import ExternalLink from '../../UI/ExternalLink'
import H2 from '../../UI/H2'
import H3 from '../../UI/H3'

const MaterialsItem = ({ content, changeTechnology, current }) => {
   const plus = <span className={styles.markIsChoosen}>+</span>;
   const minus = <span className={styles.markIsChoosen}>-</span>;
   const { header, id, docs, onlineCourses, articles } = content;

   return (
      <article className={styles.technology}>
         <div
            className={styles.headerContainer}
            onClick={() => changeTechnology(id)}
         >
            {current === id ? plus : minus}
            <H2 text={header} hoverActive />
         </div>
         <div
            className={current === id ? styles.linksContainer : styles.linksContainerDisactive}
         >
            {/* dokumentacje */}
            <H3 text={docs.header} />
            {docs.items.map(item => {
               return (
                  <ExternalLink
                     to={item.link}
                     header={item.title}
                     type="docs"
                     key={item.title}
                  />
               )
            })}
            {/* articles */}
            <H3 text={articles.header} />
            {articles.items.map(item => {
               return (
                  <ExternalLink
                     to={item.link}
                     header={item.title}
                     type="articles"
                     key={item.title}
                  />
               )
            })}
            {/* onlineCourses */}
            <H3 text={onlineCourses.header} />
            {onlineCourses.items.map(item => {
               return (
                  <ExternalLink
                     to={item.link}
                     header={item.title}
                     type="video"
                     key={item.title}
                  />
               )
            })}
         </div>
      </article>
   )
}

export default MaterialsItem
