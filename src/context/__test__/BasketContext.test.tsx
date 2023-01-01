import React from 'react';
import { render, act } from '@testing-library/react';
import BasketContext, { IBasketContext } from '../BasketContext';

describe('BasketContextProvider', () => {
  it('provides the correct context values', () => {
    let basketContext: IBasketContext = {
      setBasketItems: jest.fn(),
      basketItems: [],
    };

    act(() => {
      render(
        <BasketContext.Provider value={basketContext}>
          <BasketContext.Consumer>
            {(context: any) => {
              basketContext = context;
              return null;
            }}
          </BasketContext.Consumer>
        </BasketContext.Provider>
      );
    });

    expect(basketContext).toEqual({
      basketItems: [],
      setBasketItems: expect.any(Function),
    });
  });
});
