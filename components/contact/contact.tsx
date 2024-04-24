'use client';

import { AppContext } from '@/context/context';
import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import gitFull from '../../public/icons/git_full.svg';
import gitOutline from '../../public/icons/git_outline.svg';
import linkedinFull from '../../public/icons/linkedin_full.svg';
import linkedinOutline from '../../public/icons/linkedin_outline.svg';
import mailFull from '../../public/icons/mail_full.svg';
import mailOutline from '../../public/icons/mail_outline.svg';
import Box from '../box/box';
import Button from '../button/button';
import { FooterItem } from '../footer-item/footer-item';
import Header from '../header/header';
import Input from '../input/input';
import Paragraph from '../paragraph/paragraph';
import TextArea from '../text-area/text-area';
import styles from './contact.module.scss';

// TODO: https://formspree.io/guides/nextjs/

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {
    size,
    strings: { contact },
  } = useContext(AppContext);

  useEffect(() => {
    setName('');
    setEmail('');
    setMessage('');
  }, []);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('https://dd-duszynski.herokuapp.com/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setIsSent(false), 6000);
      })
      .catch((err) => {
        setIsError(true);
        setTimeout(() => setIsError(false), 6000);
      });
  };

  const thxMessage = (
    <Box addClass={styles.thxMessage} direction='column'>
      <GiCoffeeCup className={styles.icon} />
      <Paragraph text={contact.thxMessage1} />
      <Paragraph text={contact.thxMessage2} />
    </Box>
  );

  const errorMessage = (
    <Box addClass={styles.thxMessage} direction='column'>
      <Paragraph text={contact.errorMessage} />
    </Box>
  );

  const isLargeScreen = size >= 900;

  return (
    <section className={styles.contact}>
      <Box justify='center' align='flex-start' direction='column'>
        <Header type='h1' text={contact.header} addClass={styles.h1} />
        <Box justify='flex-start' align='center' direction='row'>
          {isLargeScreen && (
            <>
              <Box
                addClass={styles.contactIconsBox}
                justify='flex-start'
                align='flex-start'
                direction='column'
              >
                {/* TODO FooterItem change name */}
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
              <div className={styles.line} />
            </>
          )}
          <form
            onSubmit={submitHandler}
            className={classNames(
              styles.form,
              isLargeScreen ? styles.halfWidthForm : styles.fullWidthForm
            )}
            id='contact'
          >
            <Box justify='center' align='flex-start' direction='column'>
              {isError ? (
                errorMessage
              ) : isSent ? (
                thxMessage
              ) : (
                <ul className={styles.listContainer}>
                  <li className={styles.singleFormItem}>
                    <Input
                      labelText={contact.nameLabel}
                      placeholder={contact.namePlaceholder}
                      type='text'
                      id='name'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </li>
                  <li className={styles.singleFormItem}>
                    <Input
                      labelText={contact.emailLabel}
                      placeholder={contact.emailPlaceholder}
                      type='email'
                      id='email'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </li>
                  <li className={styles.singleFormItem}>
                    <TextArea
                      labelText={contact.messageLabel}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={contact.messagePlaceholder}
                    />
                  </li>
                  <li className={styles.singleFormItem}>
                    <Button type='submit' text={contact.sendMessageButton} />
                  </li>
                </ul>
              )}
            </Box>
          </form>
        </Box>
      </Box>
    </section>
  );
};

export default ContactForm;
