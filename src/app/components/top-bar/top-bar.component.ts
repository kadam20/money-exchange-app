import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  #layoutService = inject(LayoutService);
  isLightTheme = this.#layoutService.isLightTheme;

  switchTheme() {
    this.#layoutService.switchTheme();
  }
}
