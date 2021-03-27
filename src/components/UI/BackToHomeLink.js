import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import styles from './BackToHomeLink.module.scss'

const BackToHomeLink = ({ text }) => {
   return (
      <Link to="/" className={styles.homeLink}>
         <BiArrowBack className={styles.icon} />
         {text}
      </Link>)
}

export default BackToHomeLink
