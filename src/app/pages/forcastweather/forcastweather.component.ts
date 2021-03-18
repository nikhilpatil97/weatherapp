import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../../services/weatherdata.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-forcastweather',
  templateUrl: './forcastweather.component.html',
  styleUrls: ['./forcastweather.component.scss']
})
export class ForcastweatherComponent implements OnInit {

  public forecastWeatherData:object[];
  constructor(private wetherDataService: WeatherdataService) { }

  ngOnInit() {
    this.callForecastWeatherService();
  }

  callForecastWeatherService() {
    this.wetherDataService.getWeatherData().subscribe((data: object) => {
      this.forecastWeatherData =data['list'].slice(1); 
      console.log(this.forecastWeatherData);
    });
  }

}
