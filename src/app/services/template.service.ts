import { Injectable } from '@angular/core';
import { DataColumn } from '../models/data-column.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  constructor() { }

  public getColumnTemplate(colInfo : DataColumn){
    let template = `<dxi-column dataField="${colInfo.dataField}" caption="${colInfo.caption}" 
          ${this.getWidthHtml(colInfo)}
          ${this.getAlignHtml(colInfo)} >
    ${this.findInnerTemplate(colInfo)}
    </dxi-column>
    `;
    return template;
  }

  public getWidthHtml(colInfo : DataColumn){
    if(!colInfo.width) return ''
    return `[width]=${colInfo.width}`
  }

  public getAlignHtml(colInfo : DataColumn){
    if(!colInfo.alignment) return ''
    return `alignment="${colInfo.alignment}"`
  }

  public findInnerTemplate(colInfo: DataColumn) {
    if(colInfo.cellTemplate != null)
      return colInfo.cellTemplate;
    return '';
  }

  public getTemplateByCode(code : string){
    
    return ''
  }
  
}


