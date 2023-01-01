import React, { useContext } from 'react';
import './BasketContent.css';
import { FaShoppingBasket } from 'react-icons/fa';
import BasketContext, { IBasketContext } from '../../../context/BasketContext';
import BasketItem from '../BasketItem/BasketItem';
import useBasketHook from '../../../hooks/useBasket';

interface BasketContentProps {
  showContent: boolean;
}

const BasketContent: React.FC<BasketContentProps> = ({ showContent }) => {
  const { basketItems } = useContext(BasketContext) as IBasketContext;
  const { removeItem } = useBasketHook();

  return (
    <div
      className={
        'basket-content ' + (!showContent ? 'basket-content-hide' : null)
      }
    >
      {basketItems.length > 0 ? (
        basketItems.map((item) => (
          <BasketItem
            key={item.id}
            title={item.title}
            id={item.id}
            image={item.image}
            removeItem={removeItem}
          ></BasketItem>
        ))
      ) : (
        <p className="text-align-center empty-basket-content">
          <FaShoppingBasket />
          <br />
          Sepetinizde hiç ürün bulunmamaktadır!
        </p>
      )}
    </div>
  );
};

export default BasketContent;
