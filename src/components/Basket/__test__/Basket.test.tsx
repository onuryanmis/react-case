import React from 'react';
import { render } from '@testing-library/react';
import Basket from '../Basket';
import BasketContext from '../../../context/BasketContext';

describe('Basket', () => {
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

  it('renders the BasketButton and BasketContent components', () => {
    const { getByText } = render(
      <BasketContext.Provider
        value={{
          basketItems: [],
          setBasketItems: jest.fn(),
        }}
      >
        <Basket />
      </BasketContext.Provider>
    );

    expect(
      getByText(/Sepetinizde hiç ürün bulunmamaktadır!/i)
    ).toBeInTheDocument();
  });
});
