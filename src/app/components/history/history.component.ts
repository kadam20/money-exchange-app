import { Component, OnInit, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectCurrencyByName } from '../../state/currency/currency.selector';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ChartModule, SelectButtonModule, FormsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent implements OnInit {
  data: any;
  stateOptions: any[] = [
    { label: 'Week', value: 'one-way' },
    { label: 'Month', value: 'return' },
    { label: 'Year', value: 'return' },
  ];
  value: string = 'off';

  options: any;
  justifyOptions: any[] = [
    { icon: 'pi pi-align-left', justify: 'Left' },
    { icon: 'pi pi-align-right', justify: 'Right' },
    { icon: 'pi pi-align-center', justify: 'Center' },
    { icon: 'pi pi-align-justify', justify: 'Justify' },
  ];

  favCurrency = signal<Currency>({} as Currency);

  constructor(public store: Store) {}

  ngOnInit() {
    this.store
      .select(selectCurrencyByName as any)
      .subscribe((data) => this.favCurrency.set(data as Currency));
    console.log('data', this.favCurrency());
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      datasets: [
        {
          label: 'Dataset 2',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--primary-color'),
          yAxisID: 'y1',
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };
  }
}
