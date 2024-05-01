import Box from '@/components/box/box';
import Header from '@/components/header/header';
import { IListOfTechnology, ListOfProjectsType } from '@/models/strings';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import { ProjectCardOverlay } from '../project-card-overlay/project-card-overlay';
import styles from '././project-card.module.scss';

export const ProjectCard = (item: ListOfProjectsType) => {
  const { title, role, shortDescription, photos, link } = item;
  const [isHover, setIsHover] = useState(false);

  const {
    strings: { projects, listOfTechnologies },
    size,
  } = useContext(AppContext);

  const arrOfTechnologies = listOfTechnologies?.filter(
    (i: IListOfTechnology) =>
      i.projects.findIndex((item: string) => item === title) >= 0
  );

  return (
    <article className={styles.projectCard}>
      <Link href={link} className={styles.s}>
        <Box align='baseline' justify='space-between' addClass={styles.box}>
          <Header type='h2' text={title} />
          {size <= 1000 && (
            <Header type='h4' addClass={styles.h4} text={`{${role}}`} />
          )}
        </Box>
        <Box addClass={styles.imgBox}>
          <Image
            src={photos[0]}
            className={isHover ? styles.projectImgHide : styles.projectImg}
            alt='project'
          />
        </Box>
        {projects && arrOfTechnologies && size > 1000 && (
          <ProjectCardOverlay
            isHover={isHover}
            setIsHover={setIsHover}
            projects={projects}
            role={role}
            shortDescription={shortDescription}
            technologies={arrOfTechnologies}
          />
        )}
      </Link>
    </article>
  );
};
