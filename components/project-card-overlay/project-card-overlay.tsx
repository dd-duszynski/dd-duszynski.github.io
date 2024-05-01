import classNames from 'classnames';

import styles from './project-card-overlay.module.scss';
import Box from '@/components/box/box';
import Header from '@/components/header/header';
import Paragraph from '@/components/paragraph/paragraph';
import SwitchIcon from '@/components/switch-icon/switch-icon';

interface Projects {
  title: string;
  roleInfo: string;
  descriptionInfo: string;
  technologyInfo: string;
  screens: string;
  homeLink: string;
}
interface Technologies {
  name: string;
  fullName: string;
  type: string;
  description: string;
  links: string[][];
  projects: string[];
}

interface CardOverlayProps {
  isHover: boolean;
  setIsHover: (val: boolean) => void;
  projects: Projects;
  role: string;
  shortDescription: string;
  technologies: Technologies[];
}

export const ProjectCardOverlay = ({
  isHover,
  setIsHover,
  projects,
  role,
  shortDescription,
  technologies,
}: CardOverlayProps) => {
  return (
    <div
      className={styles.projectCardOverlay}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={classNames(styles.info, isHover && styles.infoVisible)} />
      <Box
        addClass={classNames(styles.overlay, isHover && styles.overlayVisible)}
        direction='column'
        align='flex-start'
        justify='flex-start'
      >
        <Header type='h3' text={projects.roleInfo} />
        <Paragraph addClass={styles.paragraph} text={role} />
        <div className={styles.line}>
          <hr />
        </div>
        <Header type='h3' text={projects.descriptionInfo} />
        <Paragraph addClass={styles.paragraph} text={shortDescription} />
        <div className={styles.line}>
          <hr />
        </div>
        <Header type='h3' text={projects.technologyInfo} />
        <div className={styles.iconsContainer}>
          {technologies.map((i) => (
            <SwitchIcon name={i.name} key={i.name} />
          ))}
        </div>
      </Box>
    </div>
  );
};
