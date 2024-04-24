'use client';

import { AppContext } from '@/context/context';
import { useContext } from 'react';
import gitFull from '../../public/icons/git_full.svg';
import gitOutline from '../../public/icons/git_outline.svg';
import linkedinFull from '../../public/icons/linkedin_full.svg';
import linkedinOutline from '../../public/icons/linkedin_outline.svg';
import mailFull from '../../public/icons/mail_full.svg';
import mailOutline from '../../public/icons/mail_outline.svg';
import Box from '../box/box';
import { FooterItem } from '../footer-item/footer-item';
import Paragraph from '../paragraph/paragraph';
import { ScrollToTopButton } from '../scroll-to-top-button/scroll-to-top-button';
import styles from './footer.module.scss';

export const Footer = () => {
  const { size } = useContext(AppContext);

  const largeDeviceFooter = (
    <footer className={styles.footerLarge}>
      <div className={styles.container}>
        <Box justify='space-between' align='center' direction='row'>
          <Paragraph
            text='© Damian Duszyński 2024'
            addClass={styles.copyright}
          />
          <ScrollToTopButton />
        </Box>
      </div>
    </footer>
  );

  const smallDeviceFooter = (
    <footer className={styles.smallDeviceFooter}>
      <Box addClass={styles.box} justify='space-between' align='center'>
        <FooterItem
          url='https://www.linkedin.com/in/dd-duszynski'
          activeIcon={linkedinOutline}
          icon={linkedinFull}
          description='linkedin icon'
          biggerIcon
        />
        <FooterItem
          url='mailto:dd.duszynski@gmail.com'
          activeIcon={mailOutline}
          icon={mailFull}
          description='mail icon'
          biggerIcon
        />
        <FooterItem
          url='https://github.com/dd-duszynski'
          activeIcon={gitOutline}
          icon={gitFull}
          description='github icon'
          biggerIcon
        />
      </Box>
    </footer>
  );

  return size >= 900 ? largeDeviceFooter : smallDeviceFooter;
};
