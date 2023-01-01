import React, { createContext, useState } from 'react';
import { AppEnum } from '../enum/appEnum';

export interface IAppContext {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  brandFilter: string;
  setBrandFilter: React.Dispatch<React.SetStateAction<string>>;
  sortType: AppEnum;
  setSortType: React.Dispatch<React.SetStateAction<AppEnum>>;
}

const AppContext = createContext({});

export function AppContextProvider({ children }: any) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [brandFilter, setBrandFilter] = useState<string>('');
  const [sortType, setSortType] = useState<AppEnum>(AppEnum.ASC);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        brandFilter,
        setBrandFilter,
        sortType,
        setSortType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
