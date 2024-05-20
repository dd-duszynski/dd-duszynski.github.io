import strings from '@/assets/strings';
import Box from '../box/box';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';
import { ProjectCard } from '../project-card/project-card';
import styles from './projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.projects} id='projects'>
      <Box justify='center' align='flex-start' direction='column'>
        <Header type='h1' text={strings.projects.title} addClass={styles.h1} />
        {strings.listOfProjects.map((item, index) => {
          return <ProjectCard key={index} {...item} />;
        })}
      </Box>
      <Paragraph text='more projects coming soon...' />
    </section>
  );
};

export default Projects;
