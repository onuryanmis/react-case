import React, { useContext } from 'react';
import './BasketButton.css';
import { FaShoppingBasket } from 'react-icons/fa';
import BasketContext, { IBasketContext } from '../../../context/BasketContext';

interface BasketButtonProps {
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasketButton: React.FC<BasketButtonProps> = ({ setShowContent }) => {
  const { basketItems } = useContext(BasketContext) as IBasketContext;
  const totalBasketItems = basketItems.length;
  const handleClick = () => setShowContent((prevState) => !prevState);

  return (
    <div className="basket-button-wrapper">
      {totalBasketItems > 0 && (
        <span className="basket-button-count">{totalBasketItems}</span>
      )}
      <button className="basket-button" onClick={handleClick}>
        <FaShoppingBasket /> Sepetim
      </button>
    </div>
  );
};

export default BasketButton;
