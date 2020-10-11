import React from 'react'
import styles from './Contact.module.scss'
import H1 from '../UI/H1'

const ContactForm = () => {
   return (
      <form
         action="https://formspree.io/mknqqdpp"
         method="POST"
         className={styles.Contact}
         id="contact"
      >
         <H1 text="Contact" />
         <ul className={styles.Container}>
            <li className={styles.singleFormItem}>
               <label htmlFor="name">Name</label>
               <input type="text" id="name" name="user_name" />
            </li>
            <li className={styles.singleFormItem}>
               <label htmlFor="mail">Email</label>
               <input type="email" id="mail" name="user_email" />
            </li>
            <li className={styles.singleFormItem}>
               <label htmlFor="msg">Message</label>
               <textarea
                  id="msg"
                  name="user_message"
                  draggable="false"
                  rows="4"
               ></textarea>
            </li>
            <li className={styles.singleFormItem}>
               <button type="submit">Send Your Message</button>
            </li>
         </ul>
      </form>
   )
}

export default ContactForm
