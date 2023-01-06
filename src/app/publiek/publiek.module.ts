import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PubliekRoutingModule } from './publiek.routing.module';
import { FormsModule } from '@angular/forms';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { WeatherComponent } from './weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { AstronomyComponent } from './astronomy/astronomy.component';
import { TempHoursComponent } from './temp-hours/temp-hours.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    SearchbarComponent,
    CurrentWeatherComponent,
    WeatherComponent,
    WeatherForecastComponent,
    AstronomyComponent,
    TempHoursComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    PubliekRoutingModule,
  ],
  exports: [WeatherComponent],
})
export class PubliekModule {}
