import Link from 'next/link';
import styles from './logo.module.scss';

interface LogoProps {
  isSidebarOpen?: Boolean;
  handleCloseSidebar?: () => void;
}

const Logo = ({ isSidebarOpen, handleCloseSidebar }: LogoProps) => {
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
      onClick={isSidebarOpen ? handleCloseSidebar : clickHandler}
    >
      dd-
    </Link>
  );
};

export default Logo;
