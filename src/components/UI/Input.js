import React from "react";
import styles from "./Input.module.scss";

const Input = ({ value, id, labelText, type, name, onChange, placeholder }) => {
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
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</>
	);
};

export default Input;
