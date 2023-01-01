import React, { useContext, useEffect, useState } from 'react';
import './ProductCard.css';
import useBasketHook from '../../hooks/useBasket';
import BasketContext, { IBasketContext } from '../../context/BasketContext';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  brand: string;
  price: number;
  campaignPrice: number | undefined;
  campaignPercent: number | undefined;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  brand,
  price,
  campaignPrice,
  campaignPercent,
}) => {
  const { addItem, find } = useBasketHook();
  const { basketItems } = useContext(BasketContext) as IBasketContext;
  const addToBasketHandler = () => addItem({ id, title, image });
  const [showAddButton, setShowAddButton] = useState(true);

  useEffect(() => {
    setShowAddButton(find(id).length === 0);
  }, [basketItems, find, id]);

  return (
    <article className="product-card-item">
      <img src={image} alt={title} />
      <div className="product-card-info">
        <p className="product-card-item-title">{title}</p>
        <div className="product-card-detail">
          <p className="product-card-item-brand">
            <b>Marka : </b> {brand}
          </p>
          <p className="product-card-item-price">
            <b>{price}TL</b>
          </p>
          <p className="product-card-item-campaign-price">
            <del>{campaignPrice}TL</del>
            <span>%{campaignPercent}</span>
          </p>
        </div>

        {showAddButton ? (
          <button
            className="product-card-item-basket-button"
            onClick={addToBasketHandler}
          >
            Sepete Ekle
          </button>
        ) : (
          <button className="product-card-item-basket-button disable-basket-button">
            Bu ürün sepete eklenemez.
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
