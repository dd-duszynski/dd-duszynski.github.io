import React from 'react'
import styles from './ExternalLink.module.scss'
import { RiVideoLine, RiArticleLine } from 'react-icons/ri';

const ExternalLink = ({ to, header, type }) => {
   let iconType;
   switch (type) {
      case 'docs':
         iconType = <RiArticleLine />;
         break;
      case 'video':
         iconType = <RiVideoLine />;
         break;
      case 'article':
         iconType = <RiArticleLine />;
         break;
      default:
         iconType = <RiArticleLine />
   }
   return (
      <a href={to} className={styles.ExternalLink} target="_blank" rel="noopener noreferrer">
         {type ? iconType : null}
         {header}
      </a>
   )
}

export default ExternalLink
