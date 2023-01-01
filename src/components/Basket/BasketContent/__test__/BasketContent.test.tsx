import React from 'react';
import { render } from '@testing-library/react';
import BasketContent from '../BasketContent';
import BasketContext from '../../../../context/BasketContext';

describe('BasketContent', () => {
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

  it('renders the empty basket message if there are no items in the basket', () => {
    const { getByText } = render(
      <BasketContext.Provider
        value={{ basketItems: [], setBasketItems: jest.fn() }}
      >
        <BasketContent showContent />
      </BasketContext.Provider>
    );

    expect(
      getByText(/Sepetinizde hiç ürün bulunmamaktadır!/i)
    ).toBeInTheDocument();
  });

  it('renders the basket items if there are items in the basket', () => {
    const { getByText } = render(
      <BasketContext.Provider
        value={{
          basketItems: [
            { id: '1', title: 'Item 1' },
            { id: '2', title: 'Item 2' },
          ],
          setBasketItems: jest.fn(),
        }}
      >
        <BasketContent showContent />
      </BasketContext.Provider>
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('does not render the basket content if showContent is false', () => {
    const { queryByText } = render(
      <BasketContext.Provider
        value={{ basketItems: [], setBasketItems: jest.fn() }}
      >
        <BasketContent showContent={false} />
      </BasketContext.Provider>
    );

    expect(queryByText('Item 1')).not.toBeInTheDocument();
    expect(queryByText('Item 2')).not.toBeInTheDocument();
  });
});
