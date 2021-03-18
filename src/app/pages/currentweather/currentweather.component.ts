import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../../services/weatherdata.service';
import { Observable } from 'rxjs';
import { CurrentDay } from '../../models/weatherdata.model';

@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.scss']
})
export class CurrentweatherComponent implements OnInit {

  public currentWeatherData: CurrentDay;
  constructor(private wetherDataService: WeatherdataService) { }

  ngOnInit() {
    this.callCurrentWeatherService();
  }

  callCurrentWeatherService():void {
    this.wetherDataService.getWeatherData().subscribe((data:object) => {
      this.currentWeatherData = {
        cityName:data['city'].name,
        date: data['list'][0].dt,
        temperature: data['list'][0].temp.day,
        weather: data['list'][0].weather[0].main,
        weatherDescription: data['list'][0].weather[0].description,
        humidity: data['list'][0].humidity,
        pressure: data['list'][0].pressure,
        icon: data['list'][0].weather[0].icon,
      }
      console.log(this.currentWeatherData);
    });
  }

}
