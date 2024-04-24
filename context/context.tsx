'use client';

import stringsEN from '@/assets/strings-en';
import stringsPL from '@/assets/strings-pl';
import { IStrings } from '@/models/strings';
import React, { createContext, useEffect, useState } from 'react';

interface AppProviderProps {
  children: React.ReactNode;
  lang: 'PL' | 'EN';
}

export interface AppContextInterface {
  isModalOpen: boolean;
  isSidebarOpen: boolean;
  language: string;
  size: number;
  strings: IStrings;
  closeSidebar: () => void;
  languageChange: (lng: string) => void;
  toggleModal: () => void;
  openSidebar: () => void;
}

const AppContext = createContext<AppContextInterface>({
  isModalOpen: false,
  isSidebarOpen: false,
  language: 'EN',
  size: 0,
  strings: stringsEN,
  closeSidebar: () => {},
  languageChange: (lng: string) => {},
  openSidebar: () => {},
  toggleModal: () => {},
});

const AppProvider = ({ children, lang }: AppProviderProps) => {
  const [size, setSize] = useState<number>(0);
  const [isSidebarOpen, setSidebar] = useState<boolean>(false);
  const [isModalOpen, setModal] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(lang);

  useEffect(() => {
    if (window) {
      setSize(window.innerWidth);
      window.addEventListener('resize', () => {
        setSize(window.innerWidth);
      });
    }
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const toggleModal = () => {
    setModal(!isModalOpen);
  };

  const languageChange = (lng: string) => {
    localStorage.setItem('lang', lng);
    setLanguage(lng);
  };

  const strings = language === 'PL' ? stringsPL : stringsEN;

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        language,
        size,
        strings,
        closeSidebar,
        languageChange,
        openSidebar,
        toggleModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
