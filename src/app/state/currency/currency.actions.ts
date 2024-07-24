import { createAction, props } from '@ngrx/store';
import { Currency } from '../../models/currency.model';

// Actions for loading the currencies
export const loadCurrencies = createAction('[Currency Page] Load Currencies');

export const loadCurrenciesSuccess = createAction(
  '[Currency Page] Load Currencies Success',
  props<{ currencies: Currency[] }>()
);

export const loadCurrenciesFailure = createAction(
  '[Currency Page] Load Currencies Failure',
  props<{ error: string }>()
);

// Actions for setting a favourite currency
export const setFavourite = createAction(
  '[Currency Page] Set Favourite Currency',
  props<{ currencyId: number }>()
);

export const setFavouriteFailure = createAction(
  '[Currency Page] Set Favourite Currency Failure',
  props<{ error: string }>()
);
