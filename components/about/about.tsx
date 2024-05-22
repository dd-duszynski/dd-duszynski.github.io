import strings from '@/assets/strings';
import BackToHomeLink from '../back-to-home-link/back-to-home-link';
import Box from '../box/box';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';
import TimelineCard from '../timeline-card/timeline-card';
import styles from './about.module.scss';

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Box addClass={styles.mainBox} direction='column'>
        <Box
          addClass={styles.introductionBox}
          align='flex-start'
          direction='column'
          justify='flex-start'
        >
          <Header
            type='h1'
            text={`${strings.about.header}:`}
            addClass={styles.header}
          />
          {strings.about.paragraphs.map((paragraph, index) => (
            <Paragraph
              addClass={styles.paragraph}
              key={index}
              text={paragraph}
            />
          ))}
        </Box>

        <Box
          addClass={styles.experienceBox}
          align='flex-start'
          direction='column'
          justify='flex-start'
        >
          <Header
            type='h2'
            text={strings.about.whatCanIOffer}
            addClass={styles.header}
          />
          {strings.about.whatCanIOfferList.map((paragraph, index) => (
            <Paragraph
              key={index}
              text={paragraph}
              addClass={styles.whatCanIOfferListItem}
            />
          ))}
        </Box>

        {/* Experience */}
        <Box
          addClass={styles.experienceBox}
          align='flex-start'
          direction='column'
          justify='flex-start'
        >
          <Header
            type='h2'
            text={strings.about.experience}
            addClass={styles.header}
          />
          <div className={styles.timelineExperience} />
          {strings.experience.map((item, index, arr) => (
            <TimelineCard
              bottomHeader={item.bottomHeader}
              isLast={index + 1 === arr.length}
              key={index}
              paragraphs={item.paragraphs}
              topHeader={item.topHeader}
              skills={item.skills}
            />
          ))}
        </Box>
        <Box justify='flex-start' addClass={styles.homeLinkBox}>
          <BackToHomeLink text={strings.projects.homeLink} />
        </Box>
      </Box>
      <div className={styles.background} />
    </section>
  );
};
