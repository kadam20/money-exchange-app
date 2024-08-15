import { Component, input, OnInit } from '@angular/core';
import { Currency } from '../../../models/currency.model';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SubCurrencyForm } from '../../../models/form.models';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'exchange-input',
  standalone: true,
  imports: [DropdownModule, InputNumberModule, ReactiveFormsModule],
  template: `
    <form class="flex flex-row gap-2" [formGroup]="formGroupRef()">
      <div>
        <label for="from" class="font-bold block"> Currency </label>
        <p-dropdown
          [options]="currencies()"
          optionLabel="name"
          placeholder="Select a Currency"
          styleClass="w-56"
          formControlName="currency"
        >
          <ng-template pTemplate="selectedItem">
            <div class="flex align-items-center gap-2">
              <span
                [class]="
                  formGroupRef().controls['currency']!.value
                    ? formGroupRef().controls['currency']!.value!.flag
                    : ''
                "
              ></span>
              <div>
                {{
                  formGroupRef().controls['currency']!.value
                    ? formGroupRef().controls['currency']!.value!.name
                    : ''
                }}
              </div>
            </div>
          </ng-template>
          <ng-template let-currency pTemplate="item">
            <div class="flex align-items-center gap-2">
              <span [class]="currency.flag"></span>
              <div>{{ currency.name }}</div>
            </div>
          </ng-template>
        </p-dropdown>
      </div>
      <div>
        <label for="amount" class="font-bold block"> Amount </label>
        <p-inputNumber
          inputId="amount"
          styleClass="w-56"
          formControlName="amount"
          [suffix]="
            formGroupRef().controls['currency']!.value
              ? ' ' + formGroupRef().controls['currency']!.value!.sign
              : ''
          "
          class="w-full"
        />
      </div>
    </form>
  `,
  styles: ``,
})
export class ExchangeInputComponent implements OnInit {
  currencies = input.required<Currency[]>();
  formGroupRef = input.required<SubCurrencyForm>();

  ngOnInit(): void {}
}
