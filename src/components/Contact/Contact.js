import React, { useState, useContext, useEffect } from 'react'
// import { pure } from 'recompose';
import { AppContext } from '../../context/context'
import styles from './Contact.module.scss'
import H1 from '../UI/H1'
import Box from '../UI/Box'

const ContactForm = (props) => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")
   const { textContent } = useContext(AppContext)
   const { contact } = textContent

   useEffect(() => {
      setName("")
      setEmail("")
      setMessage("")
   }, [])

   return (
      <form
         action="https://formspree.io/mknqqdpp"
         method="POST"
         className={styles.Contact}
         id="contact"
      // onSubmit={submitHandler}
      >
         <Box
            justify="center"
            align="flex-start"
            column
         >
            <H1 text={contact.header} />
            <ul className={styles.Container}>
               <li className={styles.singleFormItem}>
                  <label htmlFor="name">{contact.nameLabel}</label>
                  <input
                     required
                     type="text"
                     id="name"
                     name="user_name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder={contact.namePlaceholder}
                  />
               </li>
               <li className={styles.singleFormItem}>
                  <label htmlFor="mail">{contact.emailLabel}</label>
                  <input
                     required
                     type="email"
                     id="mail"
                     name="user_email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder={contact.emailPlaceholder}
                  />
               </li>
               <li className={styles.singleFormItem}>
                  <label htmlFor="msg">{contact.messageLabel}</label>
                  <textarea
                     required
                     id="msg"
                     name="user_message"
                     draggable="false"
                     rows="4"
                     value={message}
                     placeholder={contact.messagePlaceholder}
                     onChange={(e) => setMessage(e.target.value)}
                  />
               </li>
               <li className={styles.singleFormItem}>
                  <button type="submit">
                     {contact.sendMessageButton}
                  </button>
               </li>
            </ul>
         </Box>
      </form>
   )
}

export default ContactForm;
