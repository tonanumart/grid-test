import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeSchema } from '../models/tree-schema.model';

@Component({
  selector: 'data-selector',
  templateUrl: './data-selector.component.html',
  styles: []
})
export class DataSelectorComponent implements OnInit {


  @Input('endpoint-data') public endPointData : any;
 
  public tree : TreeSchema;

  constructor() { 

  }

  ngOnInit() { 
    this.tree = this.findingSchema(this.endPointData);
  }

  private findingSchema(object : any , keyName : string = 'mainObject') : TreeSchema {
    if(Array.isArray(object)){ 
      let items : any[] = object;
      if(items.length > 0){
        let item = items[0];
        let schema = this.findingSchema(item,keyName);
        schema.sampleData = items;
        return schema;
      }else{
        return {
          name : keyName, 
          keys : [],
          next : [],
          sampleData : []
        } 
      }
    }else if(this.isObject(object)){ 
      let keys = Object.keys(object);
      let nextObject = keys.filter(key=>this.isObject(object[key]) || Array.isArray(object[key]));
      return { name : keyName , 
        keys : keys,
        next : nextObject.map(key=>{
          return this.findingSchema(object[key],key)
        }),
        sampleData : [object]
      } 
    }  
  }

  private isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

}

