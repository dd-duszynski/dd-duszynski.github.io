'use client';

import { AppContext } from '@/context/context';
import { useContext } from 'react';
import Box from '../box/box';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';
import { ProjectCard } from '../project-card/project-card';
import styles from './projects.module.scss';

const Projects = () => {
  const {
    strings: { projects, listOfProjects },
  } = useContext(AppContext);

  return (
    <section className={styles.projects} id='projects'>
      <Box justify='center' align='flex-start' direction='column'>
        <Header type='h1' text={projects.title} addClass={styles.h1} />
        {listOfProjects.map((item, index) => {
          return <ProjectCard key={index} {...item} />;
        })}
      </Box>
      <Paragraph text='more projects coming soon...' />
    </section>
  );
};

export default Projects;
