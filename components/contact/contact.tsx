'use client';

import { AppContext } from '@/context/context';
import React, { useContext, useEffect, useState } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import Box from '../box/box';
import Button from '../button/button';
import Header from '../header/header';
import Input from '../input/input';
import Paragraph from '../paragraph/paragraph';
import TextArea from '../text-area/text-area';
import styles from './contact.module.scss';

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {
    content: { contact },
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

  return (
    <form onSubmit={submitHandler} className={styles.contact} id='contact'>
      <Box justify='center' align='flex-start' direction='column'>
        <Header type='h1' text={contact.header} />
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
  );
};

export default ContactForm;
