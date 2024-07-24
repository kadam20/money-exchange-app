import { Inject, Injectable, effect, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    effect(() => {
      let themeLink = this.document.getElementById(
        'app-theme'
      ) as HTMLLinkElement;

      this.isLightTheme()
        ? (themeLink.href = 'vela-green.css')
        : (themeLink.href = 'saga-green.css');
    });
  }

  isLightTheme = signal<boolean>(false);

  switchTheme() {
    this.isLightTheme.update((value) => !value);
  }
}
