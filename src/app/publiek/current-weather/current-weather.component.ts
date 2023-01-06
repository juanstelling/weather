import { Component, Input, OnInit } from '@angular/core';
import { Current, WeatherLocation } from 'src/app/core/models/weather';
import { DarkmodeService } from 'src/app/core/services/darkmode.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
})
export class CurrentWeatherComponent implements OnInit {
  @Input() weatherLocation!: WeatherLocation;
  @Input() weatherCurrent!: Current;
  imageUrl: string = '../assets/light.jpg';

  constructor(private darkmodeService: DarkmodeService) {}

  ngOnInit(): void {
    this.darkmodeService
      .watchDarkTheme()
      .subscribe((data) => this.changeToDarkMode(data));
  }

  changeToDarkMode(isDarkMode: boolean): void {
    if (isDarkMode) {
      this.imageUrl = '../assets/dark.jpg';
    } else {
      this.imageUrl = '../assets/light.jpg';
    }
  }
}
