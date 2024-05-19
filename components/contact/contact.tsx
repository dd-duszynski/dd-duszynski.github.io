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
import Header from '../header/header';
import styles from './contact.module.scss';

const ContactForm = () => {
  const {
    size,
    strings: { contact },
  } = useContext(AppContext);

  const isMediumScreen = size > 900;

  return (
    <section className={styles.contact} id='contact'>
      <Box justify='center' align='flex-start' direction='column'>
        <Header type='h1' text={contact.header} />
        <Box
          addClass={styles.contactIconsBox}
          justify='center'
          align='center'
          direction={isMediumScreen ? 'row' : 'column'}
        >
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
          <FooterItem
            text='linkedin.com/in/dd-duszynski'
            url='https://www.linkedin.com/in/dd-duszynski'
            activeIcon={linkedinOutline}
            icon={linkedinFull}
            description='linkedin icon'
          />
        </Box>
      </Box>
    </section>
  );
};

export default ContactForm;
