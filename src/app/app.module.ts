import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrentweatherComponent } from './pages/currentweather/currentweather.component';
import { ForcastweatherComponent } from './pages/forcastweather/forcastweather.component';
import { HttpClientModule } from '@angular/common/http';
import {WeatherdataService} from './services/weatherdata.service'

@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent,
    ForcastweatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
