import { Component, } from '@angular/core';
import { WeatherService } from '../core/services/weather.service';
import { DarkmodeService } from '../core/services/darkmode.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent  {
  darkmodeStatus: string = 'on';
  
  weather$ = this.weatherService.weather$;
  selectedCity$ = this.weatherService.selectedCityAction$;

  constructor(
    private weatherService: WeatherService,
    private darkmodeService: DarkmodeService
  ) {}

  onSelected(city: string): void {
    this.weatherService.setSelectedCity(city);
  }

  toggleDarkTheme(checked: MatSlideToggleChange): void {
    this.darkmodeService.setDarkTheme(checked.checked);
    this.darkmodeStatus = checked.checked ? 'off' : 'on';
  }
}
