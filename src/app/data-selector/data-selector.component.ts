import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-selector',
  templateUrl: './data-selector.component.html',
  styles: []
})
export class DataSelectorComponent implements OnInit {


  @Input('endpoint-data') public endPointData : any;

  constructor() { 

  }

  ngOnInit() { 
    let tree = this.findingSchema(this.endPointData);
  }

  private findingSchema(object : any , keyName : string = 'object') : TreeSchema{
    let tree : TreeSchema = { name : keyName , 
      keys : Object.keys(object),
      next : [] 
    };
    tree.keys.forEach(propName => {
      let nextObject = object[propName]; 
      if(Array.isArray(nextObject)){ 
        let items : any[] = nextObject;
        if(items.length > 0){
          tree.next.push(this.findingSchema(nextObject, propName));
        }
      }else if(this.isObject(nextObject)){  
        tree.next.push(this.findingSchema(nextObject, propName));
      }
    })
    return tree;
  }

  private isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

}

interface TreeSchema {
  name : string;
  keys : string[];
  next : TreeSchema[];
}