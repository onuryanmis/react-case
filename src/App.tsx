import React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { AppContextProvider } from './context/AppContext';
import { BasketContextProvider } from './context/BasketContext';

const App = () => {
  return (
    <AppContextProvider>
      <BasketContextProvider>
        <Header />
        <Container className="container container-flex content-wrapper">
          <Sidebar />
          <Content />
        </Container>
      </BasketContextProvider>
    </AppContextProvider>
  );
};

export default App;
