import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  #window = inject(DOCUMENT).defaultView;

  getItem(item: string): string | undefined | null {
    return this.#window?.localStorage.getItem(item);
  }

  setItem(item: string, value: string): void {
    this.#window?.localStorage.setItem(item, value);
  }
}
