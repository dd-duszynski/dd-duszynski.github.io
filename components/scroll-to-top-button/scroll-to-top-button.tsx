'use client';

import strings from '@/assets/strings';
import { BsArrow90DegUp } from 'react-icons/bs';
import Box from '../box/box';
import Paragraph from '../paragraph/paragraph';
import styles from './scroll-to-top-button.module.scss';

export const ScrollToTopButton = () => {
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
      <Paragraph text={strings.footer.toTheTop} addClass={styles.paragraph} />
    </Box>
  );
};
