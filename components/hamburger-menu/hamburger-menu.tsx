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
      <div className={styles.line1} />
      <div className={styles.line2} />
      <div className={styles.line3} />
    </button>
  );
};

export default HamburgerMenu;
