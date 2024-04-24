import { IListOfTechnology } from '@/models/strings';
import React from 'react';
import Box from '../box/box';
import Header from '../header/header';
import TechnologyItem from '../technology-item/technology-item';
import styles from './technology-row.module.scss';

interface TechnologyRowProps {
  choosenItem: string | null;
  headerText: string;
  technologies: IListOfTechnology[];
  choosenItemHandler: (item: string | null) => void;
  modalToggleHandler: (technology: string) => void;
}

const TechnologyRow: React.FC<TechnologyRowProps> = ({
  choosenItem,
  headerText,
  technologies,
  modalToggleHandler,
  choosenItemHandler,
}) => {
  return (
    <article className={styles.technologyRow}>
      <Box justify='flex-start' align='center' addClass={styles.box}>
        {headerText && <Header type='h2' text={headerText} />}
      </Box>
      <ul className={styles.technologyList}>
        {technologies.map((item: IListOfTechnology) => (
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
