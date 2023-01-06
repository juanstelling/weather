import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url: string = 'https://weatherapi-com.p.rapidapi.com/forecast.json';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<Weather> {
    const options = {
      params: new HttpParams().set('q', city).set('days', 3),
      headers: new HttpHeaders()
        .set(
          'X-RapidAPI-Key',
          'ab18d94951msh8c57dbe75bec34ap1035a6jsnc085f8cb9e3b'
        )
        .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com'),
    };
    return this.http.get<Weather>(this.url, options);
  }
}
