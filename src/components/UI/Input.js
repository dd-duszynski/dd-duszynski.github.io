import React from "react";
import styles from "./Input.module.scss";

const Input = ({ value, id, labelText, type, onChange, placeholder }) => {
	return (
		<>
			<label className={styles.inputLabel} htmlFor={id}>
				{labelText}
			</label>
			<input
				className={styles.input}
				required
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</>
	);
};

export default Input;
