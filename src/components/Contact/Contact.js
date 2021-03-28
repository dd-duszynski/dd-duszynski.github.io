import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import styles from "./Contact.module.scss";
import H1 from "../UI/H1";
import Paragraph from "../UI/Paragraph";
import Box from "../UI/Box";
import TextArea from "../UI/TextArea";
import Input from "../UI/Input";
import Button from "../UI/Button";
import {GiCoffeeCup} from 'react-icons/gi'

const ContactForm = () => {
   const [isSent, setIsSent] = useState(false)
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

   const submitHandler = (event) => {
      event.preventDefault()
      fetch("https://dd-duszynski.herokuapp.com/email", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            name: name,
            email: email,
            message: message,
         })
      })
         .then(res => res.json())
         .then(res => console.log(res))
         .catch(err => console.error("ERROR: ", err))
      setIsSent(true)
      setName("")
      setEmail("")
      setMessage("")
      setTimeout(() => setIsSent(false), 6000)
   }

   const thxMessage = (
      <Box addClass={styles.thxMessage} column>
         <GiCoffeeCup className={styles.icon}/>
         <Paragraph text={contact.thxMessage1} />
         <Paragraph text={contact.thxMessage2} />
      </Box>
   )

   return (
      <form
         onSubmit={submitHandler}
         className={styles.Contact}
         id="contact"
      >
         <Box justify="center" align="flex-start" column>
            <H1 text={contact.header} />
            {isSent ? thxMessage :
               (<ul className={styles.listContainer}>
                  <li className={styles.singleFormItem}>
                     <Input
                        labelText={contact.nameLabel}
                        placeholder={contact.namePlaceholder}
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                     />
                  </li>
                  <li className={styles.singleFormItem}>
                     <Input
                        labelText={contact.emailLabel}
                        placeholder={contact.emailPlaceholder}
                        type="email"
                        id="email"
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
                     />
                  </li>
                  <li className={styles.singleFormItem}>
                     <Button
                        type="submit"
                        text={contact.sendMessageButton}
                     />
                  </li>
               </ul>)
            }
         </Box>
      </form>
   );
};

export default ContactForm;
