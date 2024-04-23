'use client';

import { AppContext } from '@/context/context';
import classNames from 'classnames';
import { useContext } from 'react';
import NavLinkItem from '../nav-link-item/nav-link-item';
import styles from './sidebar.module.scss';

export const Sidebar = () => {
  const { content, isSidebarOpen, language, closeSidebar, languageChange } =
    useContext(AppContext);
  const { navigation } = content;
  // const [mainPage, ...restNavItem] = navigation
  const btnPLCSS = language === 'PL' && styles.active;
  const btnENCSS = language === 'EN' && styles.active;
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
        {navigation.map((item: string[]) => {
          if (isHash(item[1])) {
            return (
              <NavLinkItem
                key={item[0]}
                linkTo={item[1]}
                onClickHandler={closeSidebar}
                // hash
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
        <div>
          <button
            className={classNames(styles.btn, btnPLCSS)}
            onClick={() => languageChange('PL')}
          >
            PL
          </button>
          <button
            className={classNames(styles.btn, btnENCSS)}
            onClick={() => languageChange('EN')}
          >
            EN
          </button>
        </div>
      </section>
    </aside>
  );
};
