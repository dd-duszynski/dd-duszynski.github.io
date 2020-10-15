import React, { useContext } from 'react'
import { AppContext } from '../../context/context'
import styles from './Contact.module.scss'
import H1 from '../UI/H1'

const ContactForm = () => {
   const { textContent } = useContext(AppContext)
   const { contact } = textContent
   return (
      <form
         action="https://formspree.io/mknqqdpp"
         method="POST"
         className={styles.Contact}
         id="contact"
      >
         <H1 text={contact.header} />
         <ul className={styles.Container}>
            <li className={styles.singleFormItem}>
               <label htmlFor="name">{contact.nameLabel}</label>
               <input type="text" id="name" name="user_name" />
            </li>
            <li className={styles.singleFormItem}>
               <label htmlFor="mail">{contact.emailLabel}</label>
               <input type="email" id="mail" name="user_email" />
            </li>
            <li className={styles.singleFormItem}>
               <label htmlFor="msg">{contact.messageLabel}</label>
               <textarea
                  id="msg"
                  name="user_message"
                  draggable="false"
                  rows="4"
               ></textarea>
            </li>
            <li className={styles.singleFormItem}>
               <button type="submit">{contact.sendMessageButton}</button>
            </li>
         </ul>
      </form>
   )
}

export default ContactForm
