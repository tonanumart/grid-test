import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataColumn } from 'src/app/models/data-column.model';
import { generate } from 'shortid';
import { QryDataService } from 'src/app/services/qry-data.service';

@Component({
  selector: 'column-todo',
  templateUrl: './column-todo.component.html',
  styles: ['']
})
export class ColumnTodoComponent implements OnInit {

  @Input() item : DataColumn;
  @Input() row : number;
  @Input() total : number;
  @Output() editCellTemplateClick : EventEmitter<any> = new EventEmitter();


  // @Output() upRow:EventEmitter<any> = new EventEmitter();
  // @Output() downRow:EventEmitter<any> = new EventEmitter();
  // @Output() removeRow : EventEmitter<any> = new EventEmitter();

  public shortid : string;
  public isFirst : boolean;
  public isLast : boolean;

  constructor(private service : QryDataService) { }

  ngOnInit() {
    this.shortid = generate();
    this.isFirst = this.row == 0;
    this.isLast = this.row == this.total-1;
  }


  public editCellTemplate(){
    this.editCellTemplateClick.emit({});
  }

  public removeRowClick(){
    this.service.removeIndex(this.row);
    //this.removeRow.emit();
  }

  public upRowClick(){
    this.service.upRow(this.row);
    //this.upRow.emit();
  }

  public downRowClick(){
    this.service.downRow(this.row);
    //this.downRow.emit();
  }

}
