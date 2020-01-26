import { Component, OnInit, Input } from '@angular/core';
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

  public shortid : string;
  public isFirst : boolean;
  constructor() { }

  ngOnInit() {
    this.shortid = generate();
    this.isFirst = this.row == 0;
    this.item.caption = this.camelToSentence(this.item.dataField);
  }

  private camelToSentence(stringValue : string){
    return stringValue.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
  }

}
