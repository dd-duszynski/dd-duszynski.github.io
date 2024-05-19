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
    <section className={styles.aboutSection}>
      <Box
        addClass={styles.introductionBox}
        align='flex-start'
        direction='column'
        justify='flex-start'
      >
        <Header type='h1' text={`${about.header}:`} addClass={styles.h1} />
        {strings.about.paragraphs.map((paragraph, index) => (
          <Paragraph addClass={styles.paragraph} key={index} text={paragraph} />
        ))}
      </Box>

      <Box
        addClass={styles.experienceBox}
        align='flex-start'
        direction='column'
        justify='flex-start'
      >
        <Header type='h2' text='What can I offer?' addClass={styles.h2} />
        {[
          '• 👩🏽‍💻 High work ethic',
          '• 🤝 Strong cooperation attitude',
          '• 🎨 UX and UI sensibility',
          '• 📊 Ability to analyze business requirements and customer needs',
          '• 💸 Experience in working with clients, sales department, and advertising agencies',
          '• 💪🏻 Self-driven, problem-solving oriented, independent professionalism',
        ].map((paragraph, index) => (
          <Paragraph key={index} text={paragraph} />
        ))}
      </Box>

      {/* Experience */}
      <Box
        addClass={styles.experienceBox}
        align='flex-start'
        direction='column'
        justify='flex-start'
      >
        <Header type='h1' text={about.experience} addClass={styles.h2} />
        <div className={styles.timelineExperience} />
        {experience.map((item, index, arr) => (
          <TimelineCard
            bottomHeader={item.bottomHeader}
            isLast={index + 1 === arr.length}
            key={index}
            paragraphs={item.paragraphs}
            topHeader={item.topHeader}
          />
        ))}
      </Box>
      <Box justify='flex-start'>
        <BackToHomeLink text={projects.homeLink} />
      </Box>
    </section>
  );
};
