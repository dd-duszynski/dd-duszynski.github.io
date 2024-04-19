import Link from 'next/link';
import styles from './scroll-down.module.scss';

const ScrollDown = () => {
  return (
    <Link href={'/#posts'} className={styles.scrollDown}>
      <span></span>
      <span></span>
      <span></span>
    </Link>
  );
};

export default ScrollDown;
