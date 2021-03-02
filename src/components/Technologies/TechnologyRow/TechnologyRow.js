import React, {useState} from "react";
import styles from "./TechnologyRow.module.scss";
import Box from "../../UI/Box";
import H2 from "../../UI/H2";
import TechnologyItem from "../TechnologyItem/TechnologyItem";
import { BiCodeAlt } from "react-icons/bi";
import { GiPencilBrush } from "react-icons/gi";
import { GoTools } from "react-icons/go";

const TechnologyRow = ({
   headerText,
   technologies,
   modalToggleHandler,
   choosenItem,
   choosenItemHandler
}) => {

   return (
      <article className={styles.TechnologyRow}>
         <Box justify="flex-start" align="center" addClass={styles.box}>
            <H2 text={headerText} />
         </Box>
         <ul className={styles.technologyList}>
            {technologies.map((item) => (
               <TechnologyItem
                  key={item}
                  name={item}
                  choosenItemHandler={choosenItemHandler}
                  modalToggleHandler={() => modalToggleHandler(item)}
                  isChoosen={choosenItem === item}
               />
            ))}
         </ul>
      </article>
   );
};

export default TechnologyRow;
