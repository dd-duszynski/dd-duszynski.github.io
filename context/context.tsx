'use client';

import React, { createContext, useEffect, useState } from 'react';

interface AppProviderProps {
  children: React.ReactNode;
}

export interface AppContextInterface {
  isModalOpen: boolean;
  isSidebarOpen: boolean;
  size: number;
  closeSidebar: () => void;
  toggleModal: () => void;
  openSidebar: () => void;
}

const AppContext = createContext<AppContextInterface>({
  isModalOpen: false,
  isSidebarOpen: false,
  size: 0,
  closeSidebar: () => {},
  openSidebar: () => {},
  toggleModal: () => {},
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [size, setSize] = useState<number>(0);
  const [isSidebarOpen, setSidebar] = useState<boolean>(false);
  const [isModalOpen, setModal] = useState<boolean>(false);

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

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        size,
        closeSidebar,
        openSidebar,
        toggleModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
