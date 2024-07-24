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
        name: 'Forint',
        sign: 'Ft',
        flag: 'fi fi-hu',
      },
      {
        name: 'Euro',
        sign: '€',
        flag: 'fi fi-eu',
      },
      {
        name: 'Dollar',
        sign: '$',
        flag: 'fi fi-us',
      },
      {
        name: 'Pound',
        sign: '£',
        flag: 'fi fi-gb',
      },
    ];
    return of(currencies);
  }

  setFavouriteCurrency(currenyId: number) {}
}
