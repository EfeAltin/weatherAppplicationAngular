import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';  // Import the WeatherData type

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {  // Specify the return type
    const headers = new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue);

    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json');

    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, { headers, params });
  }
}