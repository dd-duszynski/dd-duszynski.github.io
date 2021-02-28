import React, { useState, useContext, useEffect } from "react";
// import { pure } from 'recompose'; <-- usun
import { AppContext } from "../../context/context";
import styles from "./Contact.module.scss";
import H1 from "../UI/H1";
import Box from "../UI/Box";
import TextArea from "../UI/TextArea";
import Input from "../UI/Input";
import Button from "../UI/Button";
//https://formspree.io/javascript

const ContactForm = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const { textContent } = useContext(AppContext);
	const { contact } = textContent;

	useEffect(() => {
		setName("");
		setEmail("");
		setMessage("");
	}, []);

	return (
		<form
			action="https://formspree.io/mknqqdpp"
			method="POST"
			className={styles.Contact}
			id="contact"
		>
			<Box justify="center" align="flex-start" column>
				<H1 text={contact.header} />
				<ul className={styles.listContainer}>
					<li className={styles.singleFormItem}>
						<Input
							labelText={contact.nameLabel}
							placeholder={contact.namePlaceholder}
							id="name"
							type="text"
							name="user_name"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</li>
					<li className={styles.singleFormItem}>
						<Input
							labelText={contact.emailLabel}
							placeholder={contact.emailPlaceholder}
							id="mail"
							type="email"
							name="user_email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</li>
					<li className={styles.singleFormItem}>
						<TextArea
							labelText={contact.messageLabel}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder={contact.messagePlaceholder}
							name="user_message"
						/>
					</li>
					<li className={styles.singleFormItem}>
						<Button
							type="submit"
							text={contact.sendMessageButton}
						/>
					</li>
				</ul>
			</Box>
		</form>
	);
};

export default ContactForm;
