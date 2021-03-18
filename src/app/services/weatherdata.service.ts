import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor( private http:HttpClient) { }
  url='https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1';
  getWeatherData(){
    return this.http.get(this.url);
  }

}
