import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import BasketContext from '../../../context/BasketContext';

describe('Header', () => {
  beforeEach(() => {
    jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation((key: any) => {
        if (key === 'basketItems') {
          return JSON.stringify([
            { id: '1', title: 'Item 1' },
            { id: '2', title: 'Item 2' },
          ]);
        }
      });
  });

  it('renders the Container, Logo, SearchInput, and Basket components', () => {
    const { container } = render(
      <BasketContext.Provider
        value={{
          basketItems: [],
          setBasketItems: jest.fn(),
        }}
      >
        <Header />
      </BasketContext.Provider>
    );

    expect(container.getElementsByTagName('header').length).toBe(1);
    expect(container.getElementsByClassName('container').length).toBe(1);
    expect(container.getElementsByClassName('header-wrapper').length).toBe(1);
    expect(container.getElementsByClassName('logo').length).toBe(1);
    expect(
      container.getElementsByClassName('search-input-wrapper').length
    ).toBe(1);
    expect(container.getElementsByClassName('basket-wrapper').length).toBe(1);
  });
});
