import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CurrencyState } from './currency.redurer';

export const selectCurrencies = (state: AppState) => state.currencies;

export const selectAllCurrencies = createSelector(
  selectCurrencies,
  (state: CurrencyState) => state
);

export const selectCurrencyByName = createSelector(
  selectCurrencies,
  (selectCurrencies: CurrencyState) =>
    selectCurrencies.currencies.find((currency) => currency.isFavorite)
);
