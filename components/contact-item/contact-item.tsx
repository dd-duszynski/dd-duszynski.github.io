import Link from 'next/link';
import Paragraph from '../paragraph/paragraph';
import styles from './contact-item.module.scss';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  url: string;
}

export const ContactItem = ({ icon, text, url }: ContactItemProps) => {
  return (
    <Link
      className={styles.link}
      href={url}
      rel='noopener noreferrer'
      target='_blank'
    >
      {icon}
      <Paragraph text={text} addClass={styles.paragraph} />
    </Link>
  );
};
