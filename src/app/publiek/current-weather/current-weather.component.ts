import { Component, Input,  } from '@angular/core';
import { map, tap } from 'rxjs';
import { Current, WeatherLocation } from 'src/app/core/models/weather';
import { DarkmodeService } from 'src/app/core/services/darkmode.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
})
export class CurrentWeatherComponent  {
  @Input() weatherLocation!: WeatherLocation;
  @Input() weatherCurrent!: Current;
  darkImage : string = '../assets/dark.jpg';
  lightImage : string = '../assets/light.jpg';

  darkThemeAction$ = this.darkmodeService.themeDarkAction$;
  imageUrl$ = this.darkThemeAction$.pipe(
    map( isDark => {
      if(isDark) {
        return this.darkImage;
      } else {
        return this.lightImage;
      }
    }),
  )
  
  constructor(private darkmodeService: DarkmodeService) {}
}
