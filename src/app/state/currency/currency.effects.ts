import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CurrencyService } from '../../services/currency.service';
import { AppState } from '../app.state';
import {
  loadCurrencies,
  loadCurrenciesFailure,
  loadCurrenciesSuccess,
  setFavourite,
} from './currency.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Currency } from '../../models/currency.model';

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private currencyService: CurrencyService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrencies),
      switchMap(() =>
        from(this.currencyService.getCurrencies()).pipe(
          map((currencies) =>
            loadCurrenciesSuccess({
              currencies: currencies as unknown as Currency[],
            })
          ),
          catchError((error) => of(loadCurrenciesFailure({ error })))
        )
      )
    )
  );
}
