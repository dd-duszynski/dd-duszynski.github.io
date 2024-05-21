'use client';

import strings from '@/assets/strings';
import Box from '@/components/box/box';
import HamburgerMenu from '@/components/hamburger-menu/hamburger-menu';
import Logo from '@/components/logo/logo';
import { AppContext, AppContextInterface } from '@/context/context';
import { useContext } from 'react';
import NavLinkItem from '../nav-link-item/nav-link-item';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const { isSidebarOpen, size, closeSidebar, openSidebar } =
    useContext<AppContextInterface>(AppContext);

  const {
    navigation: [_mainPage, ...restNavItem],
  } = strings;

  const isHash = (i: string) => i.indexOf('#') > 0;

  const largeDevices = (
    <>
      <Logo />
      <ul className={styles.links}>
        {restNavItem.map((item: string[]) => {
          if (isHash(item[1])) {
            return (
              <Box as={'li'} key={item[0]} addClass={styles.link}>
                <NavLinkItem linkTo={item[1]}>{item[0]}</NavLinkItem>
              </Box>
            );
          } else {
            return (
              <Box as={'li'} key={item[0]} addClass={styles.link}>
                <NavLinkItem linkTo={item[1]}>{item[0]}</NavLinkItem>
              </Box>
            );
          }
        })}
      </ul>
    </>
  );

  const smallDevice = (
    <>
      <Logo closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <HamburgerMenu
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </>
  );

  return (
    <header className={styles.navbar} id='nav'>
      <nav className={styles.container}>
        {size > 1000 ? largeDevices : smallDevice}
      </nav>
    </header>
  );
};
