import { createReducer, on } from '@ngrx/store';
import { Currency } from '../../models/currency.model';
import {
  loadCurrencies,
  loadCurrenciesSuccess,
  loadCurrenciesFailure,
  setFavourite,
  setFavouriteFailure,
} from './currency.actions';

export interface CurrencyState {
  currencies: Currency[];
  error: string | null;
  //   status: 'pending' | 'loading' | 'error' | 'success';
  status: string;
}

export const initialState: CurrencyState = {
  currencies: [],
  error: null,
  status: 'pending',
};

export const currencyReducer = createReducer(
  initialState,
  // Actions for loading the currencies
  on(loadCurrencies, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadCurrenciesSuccess, (state, { currencies }) => ({
    ...state,
    currencies: currencies,
    error: null,
    status: 'success',
  })),
  on(loadCurrenciesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),
  // Actions for favouriting a currency
  on(setFavourite, (state, { currencyId }) => ({
    ...state,
    currencies: [...state.currencies],
  })),
  on(setFavouriteFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
