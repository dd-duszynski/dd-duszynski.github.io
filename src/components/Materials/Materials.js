import React from 'react'
import styles from './Materials.module.scss'
import ExternalLink from '../UI/ExternalLink'
import H1 from '../UI/H1'
import H2 from '../UI/H2'
import Paragraph from '../UI/Paragraph'
import { AiFillHtml5 } from 'react-icons/ai';

const Materials = () => {
   return (
      <section className={styles.Materials}>
         <H1 text="Materiały" />
         <Paragraph
            text="Znajdziesz tu zbiór materiałów, które uważam za wartościowe w nauce wymienionych technologii"
            breakLine
            />
         <Paragraph
            text="Począwszy od oficjalnych dokumentacji przez artykuły i kursy wyjaśniające ich zawiłości."

         />
         <article className={styles.technology}>
            <div className={styles.headerContainer}>
               <H2 text="HTML"/>  
               <AiFillHtml5/>
            </div>
            <ExternalLink
               to="https://reactjs.org/"
               header="React - Oficjalna dokumentacja"
               type="docs"
               />
            <ExternalLink
               to="https://reactjs.org/"
               header="React - Oficjalna"
               type="docs"
            />
            <ExternalLink
               to="https://reactjs.org/"
               header="React - dokumentacja"
               type="video"
            />
            <ExternalLink
               to="https://reactjs.org/"
               header="React - Kurs"
               type="video"
            />
            <ExternalLink
               to="https://reactjs.org/"
               header="React - Oficjalna dokumentacja"
               type="article"
            />
         </article>
      </section>
   )
}

export default Materials
