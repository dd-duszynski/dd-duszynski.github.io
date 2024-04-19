'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link-item.module.scss';

interface NavLinkItemProps {
  children: React.ReactNode;
  linkTo: string;
  onClickHandler?: () => void;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  children,
  linkTo,
  onClickHandler,
}) => {
  const pathname = usePathname();
  const className = pathname == linkTo ? styles.navLinkActive : styles.navLink;

  return (
    <Link className={className} href={linkTo} onClick={onClickHandler}>
      {children}
    </Link>
  );
};

export default NavLinkItem;
