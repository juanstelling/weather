import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {
  @Output() cityName = new EventEmitter<string>();
  city: string = '';

  onSubmit(): void {
    this.cityName.emit(this.city);
  }
}
