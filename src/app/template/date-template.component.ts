import { Component, OnInit, ElementRef } from '@angular/core';
import { TemplateGetter } from './template-getter.interface';

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

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }

}
