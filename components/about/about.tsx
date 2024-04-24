'use client';

import { useContext } from 'react';
import { AppContext } from '../../context/context';
import BackToHomeLink from '../back-to-home-link/back-to-home-link';
import Box from '../box/box';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';
import TimelineCard from '../timeline-card/timeline-card';
import styles from './about.module.scss';

export const About = () => {
  const { strings } = useContext(AppContext);
  const { about, projects, experience } = strings;
  return (
    <section className={styles.about}>
      <Box
        addClass={styles.introductionBox}
        align='flex-start'
        direction='column'
        justify='flex-start'
      >
        <Header type='h1' text={`${about.header}:`} addClass={styles.h1} />
        <Paragraph text={about.paragraph1} addClass={styles.paragraph1} />
        <Paragraph text={about.paragraph2} />
      </Box>
      {/* Experience */}
      <Box
        justify='flex-start'
        align='flex-start'
        addClass={styles.experienceBox}
        direction='column'
      >
        <Header type='h2' text={about.expHeader} addClass={styles.h2} />
        <div className={styles.timelineExperience} />
        {experience.map((item, index, arr) => (
          <TimelineCard
            key={index}
            topHeader={item.topHeader}
            bottomHeader={item.bottomHeader}
            paragraphs={item.paragraphs}
            isLast={index + 1 === arr.length}
          />
        ))}
      </Box>
      <Box justify='flex-start'>
        <BackToHomeLink text={projects.homeLink} />
      </Box>
    </section>
  );
};
