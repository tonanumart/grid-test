import { Component, OnInit } from '@angular/core';
import { QryDataService } from '../services/qry-data.service';
import { Observable } from 'rxjs';
import { DataColumn } from '../models/data-column.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';


@Component({
  selector: 'generate-columns',
  templateUrl: './generate-columns.component.html',
  styles: [``]
})
export class GenerateColumnsComponent implements OnInit {

  constructor(private service : QryDataService,
            private modalService: NgbModal) { }

  public dataSource$ : Observable<DataColumn[]>

  public columnSchema : any[];
  public editingItem : DataColumn;

  /* Modal Property */
  public isModal : any;
  public copyRowItem : any;

  ngOnInit() {
    this.dataSource$ = this.service.getDataSource();
  }

  public saveItem(saveData : any){
    this.editingItem.cellTemplate = saveData.cellTemplate;
    this.editingItem.cellTemplateCode = saveData.cellTemplateCode;
    this.editingItem = null;
  }

  public cellTemplateEdit(item : DataColumn, row , content){
    this.isModal = false;
    this.editingItem = item;
    let cellTemplate = item.cellTemplate;
    let cellTemplateCode = item.cellTemplateCode;
    let  dataField = item.dataField;
    let caption = item.caption;
    this.copyRowItem = { cellTemplate , cellTemplateCode , dataField , row , caption };
    this.modalService.open(content, { size: 'lg' });
    of({}).pipe(delay(100),finalize(()=>this.isModal = true)).subscribe();
  }
 

}

