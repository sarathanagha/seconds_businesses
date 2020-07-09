import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Table } from 'primeng/table';
import { BusinessService } from '../../services/business.service';
import { Businesses } from '../../models/business.model';
import { MAP_API_URL } from '../../constants';

@Component({
  selector: 'businesses-list',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss'],
})

export class BusinessListComponent implements OnInit {

    constructor(private businessService: BusinessService, private sanitizer: DomSanitizer) { }

    @ViewChild('dt') table: Table;

    tableConfig: Businesses = {
        businesses: [],
        cols: [],
        selectedBusiness: { },
        displayDetals: false
    }
    
    getLocation() {
        const { selectedBusiness } = this.tableConfig;
        let url = `${MAP_API_URL}${selectedBusiness.street_address}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    toggleDetails(rowData) {
        this.tableConfig.displayDetals = true;
        this.tableConfig.selectedBusiness = rowData;
        this.tableConfig.selectedBusiness.location = this.getLocation();
    }

    ngOnInit() {
        this.businessService.getReports().then((response: any) => {
            let columns = response.meta.view.columns.slice(8);
            let displayColumns = [1,2,3,8];
            let allColumns = columns.map(col => ({ field: col.fieldName, header: col.name }));
            this.tableConfig.businesses= response.data.map((row)=> {
                return allColumns.reduce((acc, col, index)=> {
                    acc[col.field] = row[index+8];
                    return acc;
                }, {});
            });
            this.tableConfig.selectedBusiness = this.tableConfig.businesses[0];
            this.tableConfig.cols = allColumns.filter((col, index)=> displayColumns.includes(index))
        });
    }

}
