import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BasketItem from '../BasketItem';
import BasketContext from '../../../../context/BasketContext';

describe('BasketItem', () => {
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

  it('renders the title and image', () => {
    const { getByAltText, getByText } = render(
      <BasketContext.Provider value={{ setBasketItems: jest.fn() }}>
        <BasketItem
          title="Item 1"
          image="image.jpg"
          id={1}
          removeItem={jest.fn()}
        />
      </BasketContext.Provider>
    );

    expect(getByAltText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 1')).toBeInTheDocument();
  });
});
