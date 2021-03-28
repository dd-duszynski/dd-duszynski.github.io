import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({ value, onChange, placeholder, labelText }) => {
	return (
		<>
			<label className={styles.TextAreaLabel} htmlFor="msg">
				{labelText}
			</label>
			<textarea
				className={styles.textArea}
				required
				id="msg"
				draggable="false"
				rows="4"
				value={value || ""}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</>
	);
};

export default TextArea;
