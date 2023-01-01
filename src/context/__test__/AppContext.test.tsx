import React from 'react';
import { act, render } from '@testing-library/react';
import AppContext, { AppContextProvider, IAppContext } from '../AppContext';
import { AppEnum } from '../../enum/appEnum';

describe('AppContextProvider', () => {
  it('provides the correct context values', () => {
    let appContext: IAppContext = {
      searchTerm: '',
      setSearchTerm: () => {},
      brandFilter: '',
      setBrandFilter: () => {},
      sortType: AppEnum.ASC,
      setSortType: () => {},
    };

    act(() => {
      render(
        <AppContext.Provider value={appContext}>
          <AppContext.Consumer>
            {(context: any) => {
              appContext = context;
              return null;
            }}
          </AppContext.Consumer>
        </AppContext.Provider>
      );
    });

    expect(appContext).toEqual({
      searchTerm: '',
      setSearchTerm: expect.any(Function),
      brandFilter: '',
      setBrandFilter: expect.any(Function),
      sortType: 'ASC',
      setSortType: expect.any(Function),
    });
  });
});
