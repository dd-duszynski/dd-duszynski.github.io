'use client';

import { useContext, useEffect, useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { GrYoutube } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
// import { ListOfTechnologiesType } from '../../../content/content-model';
// import { AppContext } from '../../../context/context';
import { AppContext } from '@/context/context';
import Link from 'next/link';
import Box from '../box/box';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';
import SwitchIcon from '../switch-icon/switch-icon';
import styles from './technology-modal.module.scss';

interface TechnologyModalProps {
  name: string;
  // context: ListOfTechnologiesType[];
  context: any[];
}

const findNextAndPrevIndex = (
  name: string,
  arr: any[]
  // arr: ListOfTechnologiesType[]
) => {
  const arrLength = arr.length;
  const currentTech = arr.findIndex((i) => i.name === name);
  let nextIndex, prevIndex;
  if (currentTech + 1 === arrLength) {
    //last
    nextIndex = 0;
    prevIndex = currentTech - 1;
  } else if (currentTech === 0) {
    //first
    nextIndex = 1;
    prevIndex = arrLength - 1;
  } else if (currentTech + 1 < arrLength) {
    //rest
    nextIndex = currentTech + 1;
    prevIndex = currentTech - 1;
  }
  return [nextIndex, prevIndex];
};

const TechnologyModal = ({ name, context }: TechnologyModalProps) => {
  const [choosenTechnology, setChoosenTechnology] = useState(name);
  const { toggleModal } = useContext(AppContext);
  const technologies = context;

  const [choosenContent] = technologies.filter(
    (i) => i.name === choosenTechnology
  );
  const [nextTechnologyIndex, prevTechnologyIndex] = findNextAndPrevIndex(
    choosenTechnology,
    technologies
  );

  // TODO
  const prevTechnology = technologies[prevTechnologyIndex!].name;
  const nextTechnology = technologies[nextTechnologyIndex!].name;

  useEffect(() => {
    // TODO https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.keyCode === 37) {
        setChoosenTechnology(prevTechnology);
      } else if (e.keyCode === 39) {
        setChoosenTechnology(nextTechnology);
      } else if (e.keyCode === 27) {
        toggleModal();
      }
    };
    document.addEventListener('keydown', keyPressHandler);
    return () => document.removeEventListener('keydown', keyPressHandler);
  });

  return (
    <div className={styles.technologyModal}>
      <Box addClass={styles.header} justify='space-between'>
        <Box align='center'>
          <SwitchIcon name={choosenTechnology} />
          <Box
            direction={choosenContent.fullName !== '' ? 'column' : 'row'}
            align={choosenContent.fullName !== '' ? 'flex-start' : 'center'}
            justify='flex-start'
            addClass={styles.titlesBox}
          >
            <Header type='h1' text={choosenContent.name} />
            {choosenContent.fullName !== '' ? (
              <Paragraph
                text={choosenContent.fullName}
                addClass={styles.subtitle}
              />
            ) : null}
          </Box>
        </Box>
        <IoMdClose className={styles.closeBtn} onClick={toggleModal} />
      </Box>
      <div className={styles.line} />
      <Box
        direction='column'
        align='flex-start'
        justify='flex-start'
        addClass={styles.descriptionBox}
      >
        <Paragraph
          text={choosenContent.description}
          addClass={styles.paragraph}
        />
        <Header type='h2' text='Dowiedz się więcej:' addClass={styles.h2} />
        {choosenContent.links.map((i) => (
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={i[1]}
            className={styles.link}
            key={i[1]}
          >
            {i[2] === 'yt' ? (
              <GrYoutube className={styles.icon} />
            ) : (
              <BiLinkExternal className={styles.icon} />
            )}
            <Paragraph text={i[0]} addClass={styles.paragraphLink} />
          </Link>
        ))}
      </Box>
      <div
        className={styles.leftBtn}
        onClick={() => setChoosenTechnology(prevTechnology)}
      >
        <RiArrowLeftSLine className={styles.iconLeftArrow} />
        {prevTechnology}
      </div>
      <div
        className={styles.rightBtn}
        onClick={() => setChoosenTechnology(nextTechnology)}
      >
        {nextTechnology}
        <RiArrowRightSLine className={styles.iconRightArrow} />
      </div>
    </div>
  );
};

export default TechnologyModal;
