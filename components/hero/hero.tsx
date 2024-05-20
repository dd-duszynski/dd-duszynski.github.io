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
        justify='center'
        align='center'
        direction='column'
      >
        <div>
          <Paragraph
            addClass={classNames(styles.inlineParagraph)}
            text={strings.hero[0]}
          />
          <Link href={'/about'} className={styles.link}>
            {strings.hero[1]}
          </Link>
          .
          <br />
          <br />
          <Paragraph
            addClass={styles.paragraph}
            text={strings.hero[2]}
            breakLine
          />
          <Paragraph
            addClass={classNames(styles.inlineParagraph)}
            text={strings.hero[3]}
          />
          <Link href={'/#contact'} className={styles.link}>
            {strings.hero[4]}
          </Link>
          .
        </div>
        <ScrollDown href='/#contact' />
      </Box>
    </section>
  );
};
