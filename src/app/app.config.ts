import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { currencyReducer } from './state/currency/currency.redurer';
import { CurrencyEffects } from './state/currency/currency.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ currencies: currencyReducer }),
    provideEffects(CurrencyEffects),
  ],
};
