import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchInput.css';
import AppContext, { IAppContext } from '../../context/AppContext';

const SearchInput: React.FC = () => {
  const { setSearchTerm } = useContext(AppContext) as IAppContext;

  return (
    <div className="search-input-wrapper">
      <FaSearch className="search-icon" color="#877f7f" />
      <input
        type="text"
        className="search-input"
        placeholder="25 milyondan fazla ürün içerisinde ara..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
