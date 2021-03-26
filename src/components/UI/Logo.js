import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
// import logo from "../../assets/favicon.svg";

const Logo = ({ isSidebarOpen, handleCloseSidebar }) => {
	const clickHandler = () => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Link
			to="/"
			className={styles.Logo}
			onClick={isSidebarOpen ? handleCloseSidebar : clickHandler}
		>
			dd-
			{/* <img src={logo} alt="logo" /> */}
		</Link>
	);
};

export default Logo;
