import { Component, Input } from '@angular/core';
import { Forecast } from 'src/app/core/models/weather';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
})
export class WeatherForecastComponent  {
  @Input() forecast!: Forecast;
}
