import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  private themeDarkSubject = new BehaviorSubject<boolean>(false);
  themeDarkAction$ = this.themeDarkSubject.asObservable();

  setDarkTheme(isThemeDark: boolean): void {
    this.themeDarkSubject.next(isThemeDark);

    if (isThemeDark) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }

  // watchDarkTheme() {
  //   return this._themeDark.asObservable();
  // }
}
