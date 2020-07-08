import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { WeatherService } from '../app/services/weather.service';
import { CommonModule } from '../app/common/common.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    SidebarModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
