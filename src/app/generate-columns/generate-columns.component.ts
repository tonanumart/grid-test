import { Component, OnInit } from '@angular/core';
import { QryDataService } from '../services/qry-data.service';
import { Observable } from 'rxjs';
import { DataColumn } from '../models/data-column.model';

@Component({
  selector: 'generate-columns',
  templateUrl: './generate-columns.component.html',
  styles: [``]
})
export class GenerateColumnsComponent implements OnInit {

  constructor(private service : QryDataService) { }

  public dataSource$ : Observable<DataColumn[]>

  public columnSchema : any[];

  ngOnInit() {
    this.dataSource$ = this.service.getDataSource();
  }
 

}

