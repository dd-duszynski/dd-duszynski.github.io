'use client';

import { useContext } from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';
import styles from './scroll-to-top-button.module.scss';
import { AppContext } from '@/context/context';
import Paragraph from '../paragraph/paragraph';
import Box from '../box/box';

export const ScrollToTopButton = () => {
  const {
    strings: { footer },
  } = useContext(AppContext);

  const smothScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      addClass={styles.scrollToTop}
      justify='flex-end'
      align='flex-end'
      onClick={smothScroll}
    >
      <BsArrow90DegUp className={styles.icon} />
      <Paragraph text={footer.toTheTop} addClass={styles.paragraph} />
    </Box>
  );
};
