import React, { useContext, useEffect, useState } from 'react';
import './Content.css';
import { Product, productApi } from '../../api/productApi';
import ProductCard from '../ProductCard/ProductCard';
import AppContext, { IAppContext } from '../../context/AppContext';
import { AppEnum } from '../../enum/appEnum';

const Content: React.FC = () => {
  const { searchTerm, brandFilter, sortType } = useContext(
    AppContext
  ) as IAppContext;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productApi.findAll();
      const items = res.filter((item) => {
        const titleMatches = item.title
          .toLowerCase()
          .includes(searchTerm ? searchTerm.toLowerCase() : '');
        const brandMatches = !brandFilter || item.brand === brandFilter;
        return titleMatches && brandMatches;
      });

      if (sortType === AppEnum.ASC) {
        items.sort((a, b) => a.price - b.price);
      } else {
        items.sort((a, b) => b.price - a.price);
      }

      setProducts(items);
    };

    fetchProducts();
  }, [searchTerm, brandFilter, sortType]);

  return (
    <section>
      {products.map((data) => (
        <ProductCard
          key={data.id}
          id={data.id}
          title={data.title}
          brand={data.brand}
          campaignPercent={data.campaign?.percent}
          campaignPrice={data.campaign?.price}
          image={data.image}
          price={data.price}
        />
      ))}
    </section>
  );
};

export default Content;
