import React, { createContext, useState } from 'react';

export interface IBasketItem {
  id: number;
  title: string;
  image: string;
}

export interface IBasketContext {
  basketItems: IBasketItem[];
  setBasketItems: React.Dispatch<React.SetStateAction<IBasketItem[]>>;
}

const BasketContext = createContext({});

export function BasketContextProvider({ children }: any) {
  const [basketItems, setBasketItems] = useState<IBasketItem[]>([]);

  return (
    <BasketContext.Provider value={{ basketItems, setBasketItems }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContext;
