import React from 'react'
import styles from './Technologies.module.scss'
import TechnologyItem from './TechnologyItem/TechnologyItem'
import GatsbyIcon from '../../assets/icon_gatsby.svg'
import HtmlIcon from '../../assets/icon_html.svg'
import CssIcon from '../../assets/icon_css.svg'
import H1 from '../UI/H1'
import H2 from '../UI/H2'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiJavascript, DiReact, DiScrum, DiTrello } from 'react-icons/di';
import { GrGatsbyjs, GrNode } from 'react-icons/gr';
import { GiPencilBrush } from 'react-icons/gi';
import { CgFigma } from 'react-icons/cg';
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAffinitydesigner, SiAffinitypublisher, SiVisualstudiocode, SiJira, SiMicrosoftexcel } from 'react-icons/si';

const Technologies = () => {
   return (
      <section className={styles.Technologies} id="tools">
         <H1 text={`Tools & Technologies`} />
         <article>
            <H2 text="Development" />
            <ul className={styles.technologyList}>

               <TechnologyItem name="HTML">
                  <AiFillHtml5 />
               </TechnologyItem>
               <TechnologyItem name="CSS">
                  <DiCss3 />
               </TechnologyItem>
               <TechnologyItem name="JavaScript">
                  <DiJavascript />
               </TechnologyItem>
               <TechnologyItem name="Node">
                  <GrNode />
               </TechnologyItem>
               <TechnologyItem name="React">
                  <DiReact />
               </TechnologyItem>
               <TechnologyItem name="Gatsby">
                  <GrGatsbyjs />
               </TechnologyItem>
               <TechnologyItem name="GIT">
                  <AiFillGithub />
               </TechnologyItem>
               <TechnologyItem name="SASS">
                  <DiSass />
               </TechnologyItem>
            </ul>
         </article>

         <article>
            <H2 text="Design" />
            <ul className={styles.technologyList}>
               <TechnologyItem name="Adobe XD">
                  <SiAdobexd />
               </TechnologyItem>
               <TechnologyItem name="Adobe Photoshop">
                  <SiAdobephotoshop />
               </TechnologyItem>
               <TechnologyItem name="Adobe Illustrator">
                  <SiAdobeillustrator />
               </TechnologyItem>
               <TechnologyItem name="Figma">
                  <CgFigma />
               </TechnologyItem>
               <TechnologyItem name="Affinity Designer">
                  <SiAffinitydesigner />
               </TechnologyItem>
               <TechnologyItem name="Affinity Publisher">
                  <SiAffinitypublisher />
               </TechnologyItem>
            </ul>
         </article>

         <article>
            <H2 text="Others" />
            <ul className={styles.technologyList}>
               <TechnologyItem name="UX/UI">
                  <GiPencilBrush />
               </TechnologyItem>
               <TechnologyItem name="Scrum">
                  <DiScrum />
               </TechnologyItem>
               <TechnologyItem name="VSC">
                  <SiVisualstudiocode
                  />
               </TechnologyItem>
               <TechnologyItem name="Jira">
                  <SiJira />
               </TechnologyItem>
               <TechnologyItem name="Trello">
                  <DiTrello />
               </TechnologyItem>
               <TechnologyItem name="Excel">
                  <SiMicrosoftexcel />
               </TechnologyItem>
            </ul>
         </article>
      </section>
   )
}

export default Technologies
