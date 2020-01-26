import { Component, OnInit, ElementRef } from '@angular/core';
import { TemplateGetter } from './template-getter.interface';

@Component({
  selector: 'number-template',
  template: `
    <p>
      number-template works!
    </p>
  `,
  styles: []
})
export class NumberTemplateComponent implements OnInit , TemplateGetter {
  

  private elRef: ElementRef;
  public type : string = 'Number';
  
  constructor(elRef: ElementRef) {
     this.elRef = elRef;
  }

  ngOnInit() {

  }

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }

}
