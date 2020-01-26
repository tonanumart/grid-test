import { Component, OnInit, ElementRef } from '@angular/core';
import { TemplateGetter } from './template-getter.interface';
import { generate } from 'shortid';

@Component({
  selector: 'chk-box-template',
  template: `
    <p>
      chk-box-template works!
    </p>
  `,
  styles: []
})
export class ChkBoxTemplateComponent implements OnInit, TemplateGetter {

  private elRef: ElementRef;
  public type : string = 'Chk';

  constructor(elRef: ElementRef) {
     this.elRef = elRef;
  }

  ngOnInit() {
    
  }

  getHtmlContent(... params: string[]) {
    let id = generate();
    let _template = 
    `<dxi-column caption="${params[0]}" dataField="${params[1]}" cellTemplate="chkBox${id}" headerCellTemplate="hChkbox${id}">
    <div *dxTemplate="let cellData of 'chkBox${id}'">
    
  </div>
  <div *dxTemplate="let cellData of 'hChkbox${id}'">
  
</div>

    </dxi-column>`;
    return _template;
  }

}
