import React from 'react'
import styles from './TechnologyModal.module.scss'
import H2 from '../../UI/H2' 
import H3 from '../../UI/H3' 
import Paragraph from '../../UI/Paragraph' 

const TechnologyModal = ({ header, technology }) => {
   return (
      <div className={styles.TechnologyModal}>
         <header className={styles.header}>
            <H2 text="CSS"/>
         </header>
         <Paragraph text="Kaskadowe arkusze stylów CSS (ang. Cascading Style Sheets) to kod służący do nadawania wyglądu strony."/>
         <H3 text="Materiały"/>
         <Paragraph text="Link 1"/>
         <Paragraph text="Link 2"/>
         <Paragraph text="Link 3"/>
      </div>
   )
}

export default TechnologyModal
