import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  _themeDark: Subject<boolean> = new Subject<boolean>();

  isThemeDark = this._themeDark.asObservable();

  setDarkTheme(isThemeDark: boolean) {
    this._themeDark.next(isThemeDark);

    if (isThemeDark) {
      document.querySelector('html')?.classList.add('dark');
      localStorage.setItem('dark', 'true');
    } else {
      document.querySelector('html')?.classList.remove('dark');
      localStorage.setItem('dark', 'false');
    }
  }

  watchDarkTheme() {
    return this._themeDark.asObservable();
  }
}
