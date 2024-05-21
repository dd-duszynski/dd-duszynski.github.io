'use client';

import strings from '@/assets/strings';
import { AppContext } from '@/context/context';
import { useContext } from 'react';
import NavLinkItem from '../nav-link-item/nav-link-item';
import styles from './sidebar.module.scss';

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  const isHash = (i: string) => i.indexOf('#') > 0;

  return (
    <aside
      className={
        isSidebarOpen
          ? `${styles.sidebar}`
          : `${styles.sidebar} ${styles.closeSidebar} `
      }
    >
      <section className={styles.linksContainer}>
        {strings.navigation.map((item: string[]) => {
          if (isHash(item[1])) {
            return (
              <NavLinkItem
                key={item[0]}
                linkTo={item[1]}
                onClickHandler={closeSidebar}
              >
                {item[0]}
              </NavLinkItem>
            );
          } else {
            return (
              <NavLinkItem
                key={item[0]}
                linkTo={item[1]}
                onClickHandler={closeSidebar}
              >
                {item[0]}
              </NavLinkItem>
            );
          }
        })}
      </section>
    </aside>
  );
};
