import strings from '@/assets/strings';
import Link from 'next/link';
import Box from '../box/box';
import Paragraph from '../paragraph/paragraph';
import styles from './not-found.module.scss';

export const NotFound = () => {
  return (
    <section className={styles.hero} id='not-found'>
      <div className={styles.background} />
      <Box
        addClass={styles.box}
        justify='center'
        align='center'
        direction='column'
      >
        <Paragraph
          addClass={styles.page404}
          text={strings.notFoundPage.title}
          breakLine
        />
        <Paragraph
          addClass={styles.inlineParagraph}
          text={strings.notFoundPage.paragraph}
          breakLine
        />
        <Link href={'/'} className={styles.link}>
          {strings.notFoundPage.link.toLocaleUpperCase()}
        </Link>
      </Box>
    </section>
  );
};
