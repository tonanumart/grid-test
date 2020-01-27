import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TemplateGetter } from 'src/app/services/template/template-getter.interface';
import { TemplateFactory } from 'src/app/services/template/template-all';

@Component({
  selector: 'modal-template-form',
  templateUrl: './modal-template-form.component.html',
  styles: []
})
export class ModalTemplateFormComponent implements OnInit {

  @Input() content: any;
  @Input() modal: any;
  @Input() item: any;
  @Output() onSave: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  public saveClick() {
    this.onSave.emit(this.item);
  }

  public templateChange(value) {
    this.item.cellTemplateCode = value;
    this.updateTemplate(true);
  }

  public updateTemplate(isReset: boolean = false) {
    let value = this.item.cellTemplateCode;
    let template = TemplateFactory.findTemplate(value);
    if (template == null) return '';
    if (isReset) {
      this.item.format = template.defaultFormat();
    }
    this.item.cellTemplate =  template.getHtmlContent(this.item.format);
  }

}
