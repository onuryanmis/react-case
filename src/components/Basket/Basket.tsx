import React, { useState } from 'react';
import BasketButton from './BasketButton/BasketButton';
import './Basket.css';
import BasketContent from './BasketContent/BasketContent';

const Basket: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <div className="basket-wrapper">
      <BasketButton setShowContent={setShowContent} />
      <BasketContent showContent={showContent} />
    </div>
  );
};

export default Basket;
