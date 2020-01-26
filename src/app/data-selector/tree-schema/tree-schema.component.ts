import { Component, OnInit, Input } from '@angular/core';
import { TreeSchema } from 'src/app/models/tree-schema.model';

@Component({
  selector: 'tree-schema',
  templateUrl: './tree-schema.component.html',
  styles: [`
    ul {
      padding: 0;
      list-style-type: none;
    }
  `]
})
export class TreeSchemaComponent implements OnInit {

  @Input() value : TreeSchema;

  public selectList : TreeSchema[];

  constructor() { }

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

  public select(keys : string[]){
    
  }

}


