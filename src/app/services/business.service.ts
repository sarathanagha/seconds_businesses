import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Business } from '../models/business.model';
import { API_BASE_URL } from '../constants';

@Injectable()
export class BusinessService {
    constructor(private http: HttpClient) { }
    getReports() {
        return this.http.get<any>(API_BASE_URL)
            .toPromise()
            .then(res => <Business[]>res)
            .then(data => { return data; });
    }
}