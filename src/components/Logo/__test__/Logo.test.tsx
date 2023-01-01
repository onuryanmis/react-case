import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../Logo';
import BasketContext from '../../../context/BasketContext';

describe('Logo', () => {
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

  it('renders the Logo components', () => {
    const { container } = render(
      <BasketContext.Provider
        value={{
          basketItems: [],
          setBasketItems: jest.fn(),
        }}
      >
        <Logo />
      </BasketContext.Provider>
    );

    expect(container.getElementsByTagName('svg').length).toBe(1);
  });
});
