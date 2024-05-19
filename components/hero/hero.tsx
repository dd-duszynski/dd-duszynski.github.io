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
            addClass={styles.paragraph}
            text='Hello, my name is Damian Duszyński.'
            breakLine
          />
          <Paragraph
            addClass={styles.paragraph}
            text='I am a Front-end Developer and UX/UI design enthusiast, specializing in React.js and TypeScript. You will find here a description of my projects and technologies that I use.'
            breakLine
          />
          <Paragraph
            addClass={classNames(styles.inlineParagraph)}
            text='Feel free to'
          />
          <Link href={'/#contact'} className={styles.link}>
            contact me
          </Link>
          .
        </div>
        <ScrollDown href='/#projects' />
      </Box>
    </section>
  );
};
