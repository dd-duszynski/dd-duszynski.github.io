import Link from 'next/link';
import styles from './scroll-down.module.scss';

interface ScrollDownProps {
  href: string;
}

const ScrollDown = ({ href }: ScrollDownProps) => {
  return (
    <Link href={href} className={styles.scrollDown}>
      <span></span>
      <span></span>
      <span></span>
    </Link>
  );
};

export default ScrollDown;
