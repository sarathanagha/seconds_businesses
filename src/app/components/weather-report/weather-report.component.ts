import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
})

export class WeatherReportComponent implements OnInit {

    constructor(private weatherService: WeatherService) { }

    @ViewChild('dt') table: Table;

    display: boolean = false;

    weatherReports: any = [];

    cols: any;

    toggleDetails(rowData) {
        this.display = true;
    }

    ngOnInit() {
        this.weatherService.getReports().then((response: any) => {
            let columns = response.meta.view.columns.slice(8);
            console.log(columns)
            let displayColumns = [1,2,3,8];
            this.cols = columns.filter((col, index)=> displayColumns.includes(index)).map(col => ({ field: col.fieldName, header: col.name }));
            this.weatherReports= response.data.map((row)=> {
                return this.cols.reduce((acc, col, index)=> {
                    acc[col.field] = row[displayColumns[index]+8];
                    return acc;
                }, {});
            });
        });
    }

}
