import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    KeyFilterModule,
  ],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.scss',
})
export class ExchangeComponent {
  exchangeForm: FormGroup;
  cities: any;

  constructor(private fb: FormBuilder) {
    this.exchangeForm = this.fb.group({
      amount: ['', Validators.required],
      from: ['', [Validators.required, Validators.email]],
      to: ['', [Validators.required, Validators.min(18)]],
    });
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  convert() {}
}
