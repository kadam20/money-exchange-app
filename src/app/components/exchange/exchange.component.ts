import { Component, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { Currency } from '../../models/currency.model';
import { Store } from '@ngrx/store';
import { selectAllCurrencies } from '../../state/currency/currency.selector';
import { FormsModule } from '@angular/forms';
import { ExchangeInputComponent } from './exchange-input/exchange-input.component';
import { CurrencyForm } from '../../models/form.models';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    KeyFilterModule,
    FormsModule,
    ExchangeInputComponent,
  ],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.scss',
})
export class ExchangeComponent implements OnInit {
  exchangeForm = signal<CurrencyForm>(
    new FormGroup({
      fromGroup: new FormGroup({
        currency: new FormControl(),
        amount: new FormControl(),
      }),
      toGroup: new FormGroup({
        currency: new FormControl(),
        amount: new FormControl(),
      }),
    })
  );
  currencies$ = signal<Currency[]>([]);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectAllCurrencies as any).subscribe((data: any) => {
      this.currencies$.set(data.currencies);
    });
  }

  convert() {}
}
