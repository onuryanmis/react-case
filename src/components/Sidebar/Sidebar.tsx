import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import AppContext, { IAppContext } from '../../context/AppContext';
import { Brand, brandApi } from '../../api/brandApi';
import { AppEnum } from '../../enum/appEnum';

const Sidebar: React.FC = () => {
  const { searchTerm, setBrandFilter, setSortType } = useContext(
    AppContext
  ) as IAppContext;
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    brandApi.findAll().then((res) => setBrands(res));
  }, []);

  return (
    <aside>
      <div id="sidebar-title">
        <h4>Cep Telefonları</h4>
        {searchTerm && (
          <p>
            Aranan Kelime : <b>{searchTerm}</b>
          </p>
        )}
      </div>

      <div className="sidebar-item sidebar-filter-item">
        <h5>Sıralama</h5>
        <ul>
          <li onClick={() => setSortType(AppEnum.ASC)}>En düşük fiyat</li>
          <li onClick={() => setSortType(AppEnum.DESC)}>En yüksek fiyat</li>
        </ul>
      </div>

      <div className="sidebar-item sidebar-brand-item">
        <h5>Marka</h5>
        <ul>
          {brands.map((item) => (
            <li key={item.id} onClick={() => setBrandFilter(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
