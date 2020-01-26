import { Component, OnInit, ElementRef } from '@angular/core';
import { TemplateGetter } from './template-getter.interface';
import { generate } from 'shortid';

@Component({
  selector: 'date-template',
  template: `
    <p>
      date-template works!
    </p>
  `,
  styles: []
})
export class DateTemplateComponent implements OnInit , TemplateGetter {

  private elRef: ElementRef;
  public type : string = 'Date';

  constructor(elRef: ElementRef) {
     this.elRef = elRef;
  }

  ngOnInit() {
  }

  getHtmlContent(... params: string[]) {
    let id = generate();
    let _template = 
    `<dxi-column caption="${params[0]}" dataField="${params[1]}" cellTemplate="template${id}"  dataType="date">
      <div *dxTemplate="let cellData of 'template${id}'">
        {{cellData.value | date: '${params[2]}'}}
      </div>
</dxi-column>`;
    return _template;
  }

}
