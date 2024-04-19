'use client';

import React, { createContext, useEffect, useState } from 'react';
import stringsEN from '@/assets/strings-en';
import stringsPL from '@/assets/strings-pl';

interface AppProviderProps {
  children: React.ReactNode;
  lang: 'PL' | 'EN';
}

export interface AppContextInterface {
  content: any; // TODO
  isModalOpen: boolean;
  isSidebarOpen: boolean;
  language: string;
  size: number;
  handleCloseSidebar: () => void;
  handleLanguageChange: (lng: string) => void;
  handleModal: () => void;
  handleOpenSidebar: () => void;
}

const AppContext = createContext<AppContextInterface>({
  content: stringsEN,
  isModalOpen: false,
  isSidebarOpen: false,
  language: 'EN',
  size: 0,
  handleCloseSidebar: () => {},
  handleLanguageChange: (lng: string) => {},
  handleModal: () => {},
  handleOpenSidebar: () => {},
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

  const handleOpenSidebar = () => {
    setSidebar(true);
  };

  const handleCloseSidebar = () => {
    setSidebar(false);
  };

  const handleModal = () => {
    setModal(!isModalOpen);
  };

  const handleLanguageChange = (lng: string) => {
    localStorage.setItem('lang', lng);
    setLanguage(lng);
  };

  const content = language === 'PL' ? stringsPL : stringsEN;

  return (
    <AppContext.Provider
      value={{
        content,
        isModalOpen,
        isSidebarOpen,
        language,
        size,
        handleCloseSidebar,
        handleLanguageChange,
        handleModal,
        handleOpenSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
