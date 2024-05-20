import strings from '@/assets/strings';
import { FaLinkedinIn } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { TbBrandGithubFilled } from 'react-icons/tb';
import Box from '../box/box';
import { ContactItem } from '../contact-item/contact-item';
import Header from '../header/header';
import styles from './contact.module.scss';

const ContactForm = () => {
  return (
    <section className={styles.contact} id='contact'>
      <Box justify='center' align='flex-start' direction='column'>
        <Header type='h1' text={strings.contact.header} />
        <Box addClass={styles.contactIconsBox} justify='center' align='center'>
          <ContactItem
            text='dd.duszynski@gmail.com'
            url='mailto:dd.duszynski@gmail.com'
            icon={<IoMail />}
          />
          <ContactItem
            text='github.com/dd-duszynski'
            url='https://github.com/dd-duszynski'
            icon={<TbBrandGithubFilled />}
          />
          <ContactItem
            text='linkedin.com/in/dd-duszynski'
            url='https://www.linkedin.com/in/dd-duszynski'
            icon={<FaLinkedinIn />}
          />
        </Box>
      </Box>
    </section>
  );
};

export default ContactForm;
