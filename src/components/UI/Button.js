import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type, text }) => {
	return (
		<button type={type} className={styles.Button}>
			{text}
		</button>
	);
};

export default Button;
