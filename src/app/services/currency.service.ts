import { Injectable } from '@angular/core';
import { Currency } from '../models/currency.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor() {}

  getCurrencies(): Observable<Currency[]> {
    const currencies: Currency[] = [
      {
        id: 1,
        name: 'Forint',
        sign: 'Ft',
        flag: 'fi fi-hu',
        isFavorite: false,
        code: 'Ft',
      },
      {
        id: 2,
        name: 'Euro',
        sign: '€',
        flag: 'fi fi-eu',
        isFavorite: false,
        code: 'EUR',
      },
      {
        id: 3,
        name: 'Dollar',
        sign: '$',
        flag: 'fi fi-us',
        isFavorite: true,
        code: 'USD',
      },
      {
        id: 4,
        name: 'Pound',
        sign: '£',
        flag: 'fi fi-gb',
        isFavorite: false,
        code: 'GBP',
      },
    ];
    return of(currencies);
  }

  setFavouriteCurrency(currenyId: number) {}
}
