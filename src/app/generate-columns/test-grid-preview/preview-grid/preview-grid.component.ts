import { Component, OnInit, Input } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

import { QryDataService } from 'src/app/services/qry-data.service';

@Component({
  selector: 'preview-grid',
  templateUrl: './preview-grid.component.html',
  styles: []
})
export class PreviewGridComponent implements OnInit {

  @Input() template : string;

  public dataSource: DataSource;

  constructor(public service : QryDataService) { }

  ngOnInit() {
    let sampleData$ = this.service.sampleData();
    sampleData$.subscribe((response)=>{
      this.dataSource = new DataSource({
        store : new ArrayStore({
          data : response
        })
      })
    })
  }

}
