'use client';

import { AppContext } from '@/context/context';
import Link from 'next/link';
import { useContext } from 'react';
import gitFull from '../../public/icons/git_full.svg';
import gitOutline from '../../public/icons/git_outline.svg';
import linkedinFull from '../../public/icons/linkedin_full.svg';
import linkedinOutline from '../../public/icons/linkedin_outline.svg';
import mailFull from '../../public/icons/mail_full.svg';
import mailOutline from '../../public/icons/mail_outline.svg';
import Box from '../box/box';
import { FooterItem } from '../footer-item/footer-item';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';
import { ScrollToTopButton } from '../scroll-to-top-button/scroll-to-top-button';
import styles from './footer.module.scss';

export const Footer = () => {
  const { size, content } = useContext(AppContext);

  const isHash = (i: string) => i.indexOf('#') > 0;

  const largeDeviceFooter = (
    <footer className={styles.footerLarge}>
      <div className={styles.container}>
        <Box
          addClass={styles.innerBox}
          justify='flex-start'
          align='flex-start'
          direction='column'
        >
          <Header
            type='h3'
            text={content.footer.contact}
            addClass={styles.socialLinkHeader}
          />
          <FooterItem
            text='linkedin.com/in/dd-duszynski'
            url='https://www.linkedin.com/in/dd-duszynski'
            activeIcon={linkedinOutline}
            icon={linkedinFull}
            description='linkedin icon'
          />
          <FooterItem
            text='dd.duszynski@gmail.com'
            url='mailto:dd.duszynski@gmail.com'
            activeIcon={mailOutline}
            icon={mailFull}
            description='mail icon'
          />
          <FooterItem
            text='github.com/dd-duszynski'
            url='https://github.com/dd-duszynski'
            activeIcon={gitOutline}
            icon={gitFull}
            description='github icon'
          />
        </Box>
        <Box justify='space-between' align='flex-start' direction='column'>
          <Header
            type='h3'
            text={content.footer.menu}
            addClass={styles.menuHeader}
          />
          {content.navigation.map((item) => {
            if (isHash(item[1])) {
              return (
                <Link
                  className={styles.footerLink}
                  href={item[1]}
                  key={item[0]}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {item[0]}
                </Link>
              );
            } else {
              return (
                <Link
                  key={item[0]}
                  href={item[1]}
                  className={styles.footerLink}
                >
                  <span className={styles.footerLink}>{item[0]}</span>
                </Link>
              );
            }
          })}
        </Box>
        <Box justify='space-between' align='flex-end' direction='column'>
          <ScrollToTopButton />
          <Paragraph
            text='© Damian Duszyński 2024'
            addClass={styles.copyright}
          />
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
