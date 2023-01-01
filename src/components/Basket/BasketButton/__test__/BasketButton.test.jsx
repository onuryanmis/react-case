import React from 'react';
import { render } from '@testing-library/react';
import BasketButton from '../BasketButton';
import BasketContext from '../../../../context/BasketContext';

describe('BasketButton', () => {
  it('renders the basket icon and text', () => {
    const { getByText } = render(
      <BasketContext.Provider
        value={{ basketItems: [{ id: '1' }, { id: '2' }] }}
      >
        <BasketButton />
      </BasketContext.Provider>
    );

    expect(getByText('Sepetim')).toBeInTheDocument();
    expect(getByText(/Sepetim/i)).toBeInTheDocument();
  });

  it('renders the basket item count if there are items in the basket', () => {
    const { getByText } = render(
      <BasketContext.Provider
        value={{ basketItems: [{ id: '1' }, { id: '2' }] }}
      >
        <BasketButton />
      </BasketContext.Provider>
    );

    expect(getByText('2')).toBeInTheDocument();
  });

  it('does not render the basket item count if there are no items in the basket', () => {
    const { queryByText } = render(
      <BasketContext.Provider value={{ basketItems: [] }}>
        <BasketButton />
      </BasketContext.Provider>
    );
    expect(queryByText(/\d/)).not.toBeInTheDocument();
  });
});
