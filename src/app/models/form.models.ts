import { FormControl, FormGroup } from '@angular/forms';
import { Currency } from './currency.model';

export type SubCurrencyForm = FormGroup<{
  currency: FormControl<Currency | null>;
  amount: FormControl<number>;
}>;

export type CurrencyForm = FormGroup<{
  fromGroup: SubCurrencyForm;
  toGroup: SubCurrencyForm;
}>;
