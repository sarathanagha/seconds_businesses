import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/weather.model';

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) { }
    //ekzq-2e7x
    //f3dg-5q57
    //https://data.montgomerycountymd.gov/api/views/2pp9-yjcs/rows.json?accessType=DOWNLOAD
    getReports() {
        return this.http.get<any>('https://data.montgomerycountymd.gov/api/views/2pp9-yjcs/rows.json')
            .toPromise()
            .then(res => <Customer[]>res)
            .then(data => { return data; });
    }
}