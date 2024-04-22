import Link from 'next/link';
import styles from './logo.module.scss';

interface LogoProps {
  isSidebarOpen?: Boolean;
  closeSidebar?: () => void;
}

const Logo = ({ isSidebarOpen, closeSidebar }: LogoProps) => {
  const clickHandler = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Link
      href='/'
      className={styles.logo}
      onClick={isSidebarOpen ? closeSidebar : clickHandler}
    >
      dd-
    </Link>
  );
};

export default Logo;
