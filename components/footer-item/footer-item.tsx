'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Paragraph from '../paragraph/paragraph';
import styles from './footer-item.module.scss';

interface FooterItem {
  activeIcon: string;
  description: string;
  icon: string;
  text: string;
  url: string;
}

export const FooterItem = ({
  activeIcon,
  description,
  icon,
  text,
  url,
}: FooterItem) => {
  const [isIconHover, setIsIconHover] = useState(false);
  const isIconHoverHandler = () => {
    isIconHover ? setIsIconHover(false) : setIsIconHover(true);
  };
  return (
    <Link
      className={styles.footerItem}
      href={url}
      rel='noopener noreferrer'
      target='_blank'
      onMouseEnter={isIconHoverHandler}
      onMouseLeave={isIconHoverHandler}
    >
      <Image
        src={isIconHover ? activeIcon : icon}
        alt={description}
        width={50}
        height={50}
      />
      <Paragraph text={text} addClass={styles.paragraph} />
    </Link>
  );
};
