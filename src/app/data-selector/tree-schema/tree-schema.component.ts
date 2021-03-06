import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeSchema } from 'src/app/models/tree-schema.model';
import { QryDataService } from 'src/app/services/qry-data.service';

@Component({
  selector: 'tree-schema',
  templateUrl: './tree-schema.component.html',
  styles: [`
    ul {
      padding: 0;
      list-style-type: none;
    }
    div.limit-height {
      max-height : 100px;
      overflow-x: auto;
    }
  `]
})
export class TreeSchemaComponent implements OnInit {

  @Input() value : TreeSchema;

  public selectList : TreeSchema[];

  constructor(private service : QryDataService) { }

  ngOnInit() {
    this.selectList = [];
    this.linkListToList(this.value);
  }

  private linkListToList(value: TreeSchema) {
    this.selectList.push(value);
    value.next.forEach(element => {
      this.linkListToList(element);
    });
  }

  public select(keys : string[],sampleData : any[]){
    this.service.columnChange(keys,sampleData);
  }

}


