import { Component, OnInit, ElementRef } from '@angular/core';
import { TemplateGetter } from './template-getter.interface';

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

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }

}
