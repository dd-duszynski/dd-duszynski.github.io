import React from "react";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({
	isSidebarOpen,
	handleCloseSidebar,
	handleOpenSidebar,
}) => {
	return (
		<button
			type="button"
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
