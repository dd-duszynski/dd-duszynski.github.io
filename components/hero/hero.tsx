import strings from '@/assets/strings';
import classNames from 'classnames';
import Link from 'next/link';
import Box from '../box/box';
import Paragraph from '../paragraph/paragraph';
import ScrollDown from '../scroll-down/scroll-down';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.background} />
      <Box
        addClass={styles.box}
        align='center'
        direction='column'
        justify='center'
      >
        <div>
          <Paragraph
            addClass={styles.paragraph}
            breakLine
            text={strings.hero[0]}
          />
          <Paragraph
            addClass={classNames(styles.inlineParagraph)}
            text={strings.hero[1]}
          />
          <br />
          <br />
          <Paragraph
            addClass={classNames(styles.inlineParagraph)}
            text={strings.hero[2]}
          />
          <Link href={'/about'} className={styles.link}>
            {strings.hero[3]}
          </Link>
          .
          <Paragraph
            addClass={classNames(styles.inlineParagraph)}
            text={strings.hero[4]}
          />
          <Link href={'/#contact'} className={styles.link}>
            {strings.hero[5]}
          </Link>
          .
        </div>
        <ScrollDown href='/#tools' />
      </Box>
    </section>
  );
};
