import React from 'react'
import styles from './ExternalLink.module.scss'
import { MdLibraryBooks } from 'react-icons/md';
import { RiVideoFill, RiArticleLine } from 'react-icons/ri';

const ExternalLink = ({ to, header, type }) => {
   let iconType;
   switch (type) {
      case 'docs':
         iconType = <MdLibraryBooks />;
         break;
      case 'video':
         iconType = <RiVideoFill />;
         break;
      case 'article':
         iconType = <RiArticleLine />;
         break;
      default:
         iconType = <RiArticleLine />
   }
   return (
      <a href={to} className={styles.ExternalLink}>
         {type ? iconType : null}
         {header}
      </a>
   )
}

export default ExternalLink
