import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import styles from './back-to-home-link.module.scss';

interface BackToHomeLinkProps {
  text: string;
}

const BackToHomeLink: React.FC<BackToHomeLinkProps> = ({ text }) => {
  return (
    <Link href='/' className={styles.homeLink}>
      <BsArrowLeft className={styles.icon} />
      {text}
    </Link>
  );
};

export default BackToHomeLink;
