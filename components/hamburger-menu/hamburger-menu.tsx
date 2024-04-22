import classNames from 'classnames';
import styles from './hamburger-menu.module.scss';

interface HamburgerMenuProps {
  isSidebarOpen: boolean;
  handleCloseSidebar: () => void;
  handleOpenSidebar: () => void;
}

const HamburgerMenu = ({
  isSidebarOpen,
  handleCloseSidebar,
  handleOpenSidebar,
}: HamburgerMenuProps) => {
  return (
    <button
      type='button'
      className={isSidebarOpen ? styles.btnIsClicked : styles.btn}
      onClick={isSidebarOpen ? handleCloseSidebar : handleOpenSidebar}
    >
      <div className={classNames(styles.line, styles.line1)} />
      <div className={classNames(styles.line, styles.line2)} />
      <div className={classNames(styles.line, styles.line3)} />
    </button>
  );
};

export default HamburgerMenu;
