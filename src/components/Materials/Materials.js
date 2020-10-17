import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/context'
import styles from './Materials.module.scss'
import H1 from '../UI/H1'
import Paragraph from '../UI/Paragraph'
import { AiFillHtml5 } from 'react-icons/ai';
import MaterialsItem from './MaterialsItem/MaterialsItem'

const Materials = () => {
   const { textContent } = useContext(AppContext);
   const [choosenTechnology, setChoosenTechnology] = useState(null)
   const { materials } = textContent
   const { listOfMaterials } = materials

   const choosenTechnologyHandler = (id) => {
      choosenTechnology === id ? setChoosenTechnology(null) : setChoosenTechnology(id)
   }

   return (
      <section className={styles.Materials}>
         <H1 text={materials.header} />
         <Paragraph
            text={materials.mainParagraph[0]}
            breakLine
         />
         <Paragraph
            text={materials.mainParagraph[1]}
         />
         {listOfMaterials.map((item) => {
            return (
               <MaterialsItem
                  changeTechnology={choosenTechnologyHandler}
                  current={choosenTechnology}
                  content={item}
                  key={item.id}
               />
            )
         })}
      </section>
   )
}

export default Materials
