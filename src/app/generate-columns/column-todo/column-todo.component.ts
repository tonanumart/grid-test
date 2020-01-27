import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataColumn } from 'src/app/models/data-column.model';
import { generate } from 'shortid';

@Component({
  selector: 'column-todo',
  templateUrl: './column-todo.component.html',
  styles: ['']
})
export class ColumnTodoComponent implements OnInit {

  @Input() item : DataColumn;
  @Input() row : number;
  @Output() editCellTemplateClick : EventEmitter<any> = new EventEmitter();

  public shortid : string;
  public isFirst : boolean;

  constructor() { }

  ngOnInit() {
    this.shortid = generate();
    this.isFirst = this.row == 0;
  }


  public editCellTemplate(){
    this.editCellTemplateClick.emit({});
  }

  

}
