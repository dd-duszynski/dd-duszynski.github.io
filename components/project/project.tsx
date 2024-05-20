'use client';

import { AppContext } from '@/context/context';
import { ListOfProjectsType } from '@/models/strings';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import BackToHomeLink from '../back-to-home-link/back-to-home-link';
import Box from '../box/box';
import Header from '../header/header';
import Modal from '../modal/modal';
import Paragraph from '../paragraph/paragraph';
import TechnologyModal from '../technology-modal/technology-modal';
import TechnologyRow from '../technology-row/technology-row';
import styles from './project.module.scss';

interface ProjectType {
  project: ListOfProjectsType;
}

export const Project = ({ project }: ProjectType) => {
  const {
    strings: { projects, listOfTechnologies },
    toggleModal,
    isModalOpen,
  } = useContext(AppContext);

  const [mainPhoto, smartphonePhoto, ...otherPhotos] = project.photos;
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [choosenItem, setChoosenItem] = useState<string | null>(null);

  const choosenItemHandler = (item: string | null) => {
    setChoosenItem(item);
  };

  const modalToggleHandler = (technology: string) => {
    setModalContent(technology);
    toggleModal();
  };

  const arrOfTechnologies = listOfTechnologies.filter(
    (i) => i.projects.findIndex((item) => item === project.title) >= 0
  );

  return (
    <>
      <Modal show={isModalOpen} onCancel={toggleModal}>
        {modalContent && (
          <TechnologyModal name={modalContent} context={arrOfTechnologies} />
        )}
      </Modal>
      <main className={styles.project} id='projects'>
        <Box justify='space-between' align='flex-start' direction='column'>
          {/* Main Photo */}
          <Box addClass={styles.photoBox}>
            <Image
              className={styles.mainPhoto}
              src={mainPhoto}
              alt='main img'
              fill
            />
          </Box>
          {/* Main Header */}
          <Box justify='space-between' addClass={styles.header}>
            <Header type='h1' text={project.title} />
            <Box align='flex-end' justify='flex-end' addClass={styles.linkBox}>
              <a
                className={styles.externalLink}
                href={project.externalLink}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Paragraph text='Link' />
                <BiLinkExternal className={styles.externalLinkIcon} />
              </a>
              {/* <a
                target='_blank'
                rel='noopener noreferrer'
                href={project.repository}
                className={styles.externalLink}
              >
                <Paragraph text='Github' />
                <SiGithub className={styles.externalLinkIcon} />
              </a> */}
            </Box>
          </Box>
          <div className={styles.line}>
            <hr />
          </div>
          {/* Role */}
          <Box
            justify='flex-start'
            align='flex-start'
            direction='column'
            addClass={styles.paragraphBox}
          >
            <Header type='h2' text={projects.roleInfo} addClass={styles.h2} />
            <Paragraph text={project.role} />
          </Box>
          {/* Description */}
          <Box
            justify='flex-start'
            align='flex-start'
            direction='column'
            addClass={styles.paragraphBox}
          >
            <Header
              type='h2'
              text={projects.descriptionInfo}
              addClass={styles.h2}
            />
            {project.description.map((item) => (
              <Paragraph text={item} key={item} addClass={styles.paragraph} />
            ))}
          </Box>

          {/* Screens */}
          <Box direction='column' align='flex-start'>
            <Header type='h2' text={projects.screens} addClass={styles.h2} />
            <Box addClass={styles.photoBox}>
              <Image
                alt=''
                className={styles.image}
                fill
                src={otherPhotos[0]}
              />
            </Box>
            <Box addClass={styles.photoBox}>
              <Image
                alt=''
                className={styles.image}
                fill
                src={smartphonePhoto}
              />
            </Box>
          </Box>

          {/* Tools & Technology */}
          <Box>
            <TechnologyRow
              choosenItem={choosenItem}
              choosenItemHandler={choosenItemHandler}
              modalToggleHandler={modalToggleHandler}
              headerText={projects.technologyInfo}
              technologies={arrOfTechnologies}
            />
          </Box>
          {/* Description2 */}
          <Box
            justify='flex-start'
            align='flex-start'
            direction='column'
            addClass={styles.paragraphBox}
          >
            <Header
              type='h2'
              text={projects.description2Info}
              addClass={styles.h2}
            />
            {project.description2.map((item) => (
              <Paragraph text={item} key={item} addClass={styles.paragraph} />
            ))}
          </Box>

          <Box direction='column' align='flex-start' addClass={styles.photoBox}>
            <Image alt='' className={styles.image} fill src={otherPhotos[1]} />
          </Box>

          <Box justify='flex-start'>
            <BackToHomeLink text={projects.homeLink} />
          </Box>
        </Box>
      </main>
    </>
  );
};
