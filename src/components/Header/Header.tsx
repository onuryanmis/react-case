import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import Container from '../Container/Container';
import SearchInput from '../SearchInput/SearchInput';
import Basket from '../Basket/Basket';

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="header-wrapper">
          <Logo />
          <SearchInput />
          <Basket />
        </div>
      </Container>
    </header>
  );
};

export default Header;
