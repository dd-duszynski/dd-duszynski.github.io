import React from 'react';
// import { ListOfTechnologiesType } from '../../../content/content-model';
import Box from '../box/box';
import Header from '../header/header';
import TechnologyItem from '../technology-item/technology-item';
import styles from './technology-row.module.scss';

interface TechnologyRowProps {
  headerText: string;
  // technologies: ListOfTechnologiesType[];
  technologies: any[];
  choosenItem: string | null;
  modalToggleHandler: (technology: string) => void;
  choosenItemHandler: (item: string | null) => void;
}

const TechnologyRow: React.FC<TechnologyRowProps> = ({
  headerText,
  technologies,
  choosenItem,
  modalToggleHandler,
  choosenItemHandler,
}) => {
  return (
    <article className={styles.technologyRow}>
      <Box justify='flex-start' align='center' addClass={styles.box}>
        {headerText && <Header type='h2' text={headerText} />}
      </Box>
      <ul className={styles.technologyList}>
        {/* TODO */}
        {/* {technologies.map((item: ListOfTechnologiesType) => ( */}
        {technologies.map((item: any) => (
          <TechnologyItem
            key={item.name}
            name={item.name}
            choosenItemHandler={choosenItemHandler}
            modalToggleHandler={() => modalToggleHandler(item.name)}
            isChoosen={choosenItem === item.name}
          />
        ))}
      </ul>
    </article>
  );
};

export default TechnologyRow;
