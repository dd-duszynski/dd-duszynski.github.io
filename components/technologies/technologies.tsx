'use client';

import { AppContext } from '@/context/context';
import { useContext, useState } from 'react';
import styles from './technologies.module.scss';
import Box from '../box/box';
import Header from '../header/header';
import TechnologyRow from '../technology-row/technology-row';

const Technologies = () => {
  const { content, isModalOpen, toggleModal } = useContext(AppContext);
  const { technologies, listOfTechnologies } = content;
  const [modalContent, setModalContent] = useState<string>('');
  const [choosenItem, setChoosenItem] = useState<string | null>(null);

  const choosenItemHandler = (item: string | null) => {
    setChoosenItem(item);
  };

  const modalToggleHandler = (technology: string) => {
    setModalContent(technology);
    toggleModal();
  };

  return (
    <>
      {/* <Modal show={isModalOpen} onCancel={toggleModal}>
        <TechnologyModal name={modalContent} context={listOfTechnologies} />
      </Modal> */}
      <section className={styles.technologies} id='tools'>
        <Box justify='center' align='flex-start' direction='column'>
          <Header type='h1' text={technologies.header} addClass={styles.h1} />
          <TechnologyRow
            choosenItem={choosenItem}
            choosenItemHandler={choosenItemHandler}
            modalToggleHandler={modalToggleHandler}
            headerText={technologies.subheaders[0]}
            technologies={listOfTechnologies.filter(
              (i) => i.type === 'development'
            )}
          />
          <TechnologyRow
            choosenItem={choosenItem}
            choosenItemHandler={choosenItemHandler}
            modalToggleHandler={modalToggleHandler}
            headerText={technologies.subheaders[1]}
            technologies={listOfTechnologies.filter((i) => i.type === 'design')}
          />
          <TechnologyRow
            choosenItem={choosenItem}
            choosenItemHandler={choosenItemHandler}
            modalToggleHandler={modalToggleHandler}
            headerText={technologies.subheaders[2]}
            technologies={listOfTechnologies.filter((i) => i.type === 'other')}
          />
        </Box>
      </section>
    </>
  );
};

export default Technologies;
