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
  url: string;
  text?: string;
  biggerIcon?: boolean;
}

export const FooterItem = ({
  activeIcon,
  description,
  icon,
  url,
  text,
  biggerIcon,
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
        // TODO wysokosc na małych urzadzeniach powinna byc 50
        width={biggerIcon ? 50 : 35}
        height={biggerIcon ? 50 : 35}
      />
      {text && <Paragraph text={text} addClass={styles.paragraph} />}
    </Link>
  );
};
