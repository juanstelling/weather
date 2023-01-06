import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../core/models/weather';
import { WeatherService } from '../core/services/weather.service';
import { DarkmodeService } from '../core/services/darkmode.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  city: string = 'Amsterdam';
  weather$!: Observable<Weather>;
  darkmodeStatus: string = 'on';

  constructor(
    private weatherService: WeatherService,
    private darkmodeService: DarkmodeService
  ) {}

  ngOnInit(): void {
    this.weather$ = this.getWeatherData(this.city);
  }

  onSubmit(city: string): void {
    this.weather$ = this.getWeatherData(city);
  }

  getWeatherData(city: string): Observable<Weather> {
    return this.weatherService.getWeatherData(city);
  }

  toggleDarkTheme(checked: MatSlideToggleChange): void {
    this.darkmodeService.setDarkTheme(checked.checked);
    this.darkmodeStatus = checked.checked ? 'off' : 'on';
  }
}
