import BasketContext, {
  IBasketContext,
  IBasketItem,
} from '../context/BasketContext';
import { useContext, useEffect } from 'react';
import { LOCALSTORAGE_NAME } from '../constant/basketConstant';

const useBasketHook = () => {
  const { setBasketItems, basketItems } = useContext(
    BasketContext
  ) as IBasketContext;

  useEffect(() => {
    setBasketItems(JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME) || '[]'));
  }, [setBasketItems]);

  const findAllItems = (): IBasketItem[] => basketItems;

  const addItem = (basketItem: IBasketItem) => {
    setBasketItems((prevState) => {
      const items = [...prevState, basketItem];
      localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(items));
      return items;
    });
  };

  const removeItem = (id: number) => {
    const items = basketItems.filter((b) => b.id !== id);
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(items));
    setBasketItems(items);
  };

  const find = (id: number): IBasketItem[] =>
    basketItems.filter((b) => b.id === id);

  return { findAllItems, addItem, removeItem, find };
};

export default useBasketHook;
