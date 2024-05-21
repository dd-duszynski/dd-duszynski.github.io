'use client';

import strings from '@/assets/strings';
import { AppContext } from '@/context/context';
import { useContext, useState } from 'react';
import Box from '../box/box';
import Header from '../header/header';
import Modal from '../modal/modal';
import TechnologyModal from '../technology-modal/technology-modal';
import TechnologyRow from '../technology-row/technology-row';
import styles from './technologies.module.scss';

const Technologies = () => {
  const { isModalOpen, toggleModal } = useContext(AppContext);
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
      <Modal show={isModalOpen} onCancel={toggleModal}>
        <TechnologyModal
          name={modalContent}
          context={strings.listOfTechnologies}
        />
      </Modal>
      <section className={styles.technologies} id='tools'>
        <Box justify='center' align='flex-start' direction='column'>
          <Header
            type='h1'
            text={strings.technologies.header}
            addClass={styles.h1}
          />
          <TechnologyRow
            choosenItem={choosenItem}
            choosenItemHandler={choosenItemHandler}
            modalToggleHandler={modalToggleHandler}
            headerText={strings.technologies.subheaders[0]}
            technologies={strings.listOfTechnologies.filter(
              (i) => i.type === 'development'
            )}
          />
          <TechnologyRow
            choosenItem={choosenItem}
            choosenItemHandler={choosenItemHandler}
            modalToggleHandler={modalToggleHandler}
            headerText={strings.technologies.subheaders[1]}
            technologies={strings.listOfTechnologies.filter(
              (i) => i.type === 'design'
            )}
          />
          <TechnologyRow
            choosenItem={choosenItem}
            choosenItemHandler={choosenItemHandler}
            modalToggleHandler={modalToggleHandler}
            headerText={strings.technologies.subheaders[2]}
            technologies={strings.listOfTechnologies.filter(
              (i) => i.type === 'other'
            )}
          />
        </Box>
      </section>
    </>
  );
};

export default Technologies;
