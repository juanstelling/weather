import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, shareReplay, switchMap, tap } from 'rxjs';
import { Weather } from '../models/weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl: string = 'https://weatherapi-com.p.rapidapi.com/forecast.json';

  private selectedCitySubject = new BehaviorSubject<string>('Amsterdam');
  selectedCityAction$ = this.selectedCitySubject.asObservable();

  weather$ = this.selectedCityAction$.pipe(
    switchMap(city => {
      let options = {
        params: new HttpParams().set('q', city).set('days', 3),
        headers: new HttpHeaders()
          .set( 'X-RapidAPI-Key', environment.RAPID_KEY )
          .set('X-RapidAPI-Host', environment.RAPID_HOST),
      };
      return this.http.get<Weather>(this.weatherUrl, options )
    }),
    shareReplay(1),
    tap(data => console.log(data))
  )

  constructor(private http: HttpClient) {}

  setSelectedCity(city : string): void {
    this.selectedCitySubject.next(city);
  }
}
