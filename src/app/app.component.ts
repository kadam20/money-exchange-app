import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { HistoryComponent } from './components/history/history.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrencyService } from './services/currency.service';
import { LocalstorageService } from './services/localstorage.service';
import { Store, StoreModule } from '@ngrx/store';
import { loadCurrencies } from './state/currency/currency.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent,
    ExchangeComponent,
    HistoryComponent,
    CurrencyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private defaultFavouriteCurrencyId = 1;
  #localStorageService = inject(LocalstorageService);
  constructor(private store: Store) {}

  ngOnInit(): void {
    const favCurrencyId = this.#localStorageService.getItem('favCurrencyId');
    // If there is no favourite currency yet, set default value
    if (!favCurrencyId) {
      this.#localStorageService.setItem(
        'favCurrencyId',
        String(this.defaultFavouriteCurrencyId)
      );
      return;
    }
    this.store.dispatch(loadCurrencies());
  }
}
