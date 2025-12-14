'use client';

import strings from '@/assets/strings';
import Box from '../box/box';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';
import { ProjectCard } from '../project-card/project-card';
import styles from './projects.module.scss';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className={styles.projects} id='projects'>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          ease: 'linear',
          duration: 1,
          x: { duration: 0.5 },
        }}
      >
        <Box justify='center' align='flex-start' direction='column'>
          <Header
            addClass={styles.h1}
            text={strings.projects.title}
            type='h1'
          />
          {strings.listOfProjects.map((item, index) => {
            return <ProjectCard key={index} {...item} />;
          })}
        </Box>
        <Paragraph text='more projects coming soon...' />
      </motion.div>
    </section>
  );
};

export default Projects;
