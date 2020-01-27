import { Injectable } from '@angular/core';
import { DataColumn } from '../models/data-column.model';
import { TemplateFactory, CheckBoxTemplate, DateTemplate, NumberTemplate } from './template/template-all';
import { generate } from 'shortid';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  constructor() { }

  public getColumnTemplate(colInfo: DataColumn) {
    let tag_id = generate();
    let template = `<dxi-column dataField="${colInfo.dataField}" caption="${colInfo.caption}" 
          ${this.getCellTemplateId(colInfo, tag_id)}
          ${this.getWidthHtml(colInfo)}
          ${this.getAlignHtml(colInfo)} >
    ${this.findInnerTemplate(colInfo, tag_id)}
    </dxi-column>
    `;
    return template;
  }

  public getCellTemplateId(colInfo: DataColumn, tag_id: any) {

    if (colInfo.cellTemplateCode == CheckBoxTemplate.type) {
      return `cellTemplate="chkBox" headerCellTemplate="headerChkbox" `;
    } else if (colInfo.cellTemplateCode == DateTemplate.type) {
      return `cellTemplate="gen-${tag_id}"`;
    } else if (colInfo.cellTemplateCode == NumberTemplate.type) {
      return ``;
    }
    return '';
  }

  public getWidthHtml(colInfo: DataColumn) {
    if (!colInfo.width) return ''
    return `[width]=${colInfo.width}`
  }

  public getAlignHtml(colInfo: DataColumn) {
    if (!colInfo.alignment) return ''
    return `alignment="${colInfo.alignment}"`
  }

  public findInnerTemplate(colInfo: DataColumn, tag_id: string) {
    if (colInfo.cellTemplate != null && colInfo.cellTemplate !== '') {
      if (colInfo.cellTemplate.indexOf('*dxTemplate') >= 0) {
        return colInfo.cellTemplate;
      }else if(colInfo.cellTemplate.indexOf('dxo-format') >= 0){
        return colInfo.cellTemplate;
      }
      return `<div *dxTemplate="let data of 'gen-${tag_id}'">${colInfo.cellTemplate}</div>`;
    }
    return '';
  }

  public genTemplateByCode(item: DataColumn, isReset: boolean = false) {
    let template = TemplateFactory.findTemplate(item.cellTemplateCode);
    if (template == null) return '';
    if (isReset) {
      item.format = template.defaultFormat();
    }
    return template.getHtmlContent(item.format);
  }

}


