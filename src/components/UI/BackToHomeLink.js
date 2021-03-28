import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import styles from './BackToHomeLink.module.scss'

const BackToHomeLink = ({ text }) => {
   return (
      <Link to="/" className={styles.homeLink}>
         <BsArrowLeft className={styles.icon} />
         {text}
      </Link>)
}

export default BackToHomeLink
