import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {
  selectAllCurrencies,
  selectCurrencies,
} from '../../state/currency/currency.selector';
import { Store } from '@ngrx/store';
import { Currency } from '../../models/currency.model';
import { Observable } from 'rxjs';
import { Inject, Injectable, effect, signal } from '@angular/core';
import { state } from '@angular/animations';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss',
})
export class CurrencyComponent implements OnInit {
  currencies$ = signal<Currency[]>([]);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectAllCurrencies as any).subscribe((data: any) => {
      this.currencies$.set(data.currencies);
    });
  }
}
