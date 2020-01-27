import { Component, OnInit, ElementRef } from '@angular/core';
import { TemplateGetter } from './template-getter.interface';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'number-template',
  template: ` `,
  styles: []
})
export class NumberTemplateComponent implements OnInit , TemplateGetter {
  

  private elRef: ElementRef;
  public type : string = 'Number';

  public precision = 2;
  public fieldName = 'thisIsName';

  constructor(elRef: ElementRef) {
     this.elRef = elRef;
  }

  ngOnInit() {

  }

  getHtmlContent(... params: string[]) {
    let _template = 
    `<dxi-column caption="${params[0]}" dataField="${params[1]}">
        <dxo-format type="fixedPoint" [precision]="${params[2]}"></dxo-format>
    </dxi-column>`;
    return _template;
  }

}
