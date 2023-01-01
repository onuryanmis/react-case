import React from 'react';
import './BasketItem.css';
import { FaRegTrashAlt } from 'react-icons/fa';

type BasketItemPropsType = {
  title: string;
  image: string;
  id: number;
  removeItem: (id: number) => void;
};

const BasketItem: React.FC<BasketItemPropsType> = ({
  title,
  image,
  id,
  removeItem,
}) => {
  return (
    <div className="basket-item">
      <img src={image} alt={title} />
      <div className="basket-item-info">
        <p>{title}</p>
        <button onClick={() => removeItem(id)}>
          <FaRegTrashAlt /> Kaldır
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
