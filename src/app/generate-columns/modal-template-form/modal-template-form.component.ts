import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';

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


  constructor(private service : TemplateService) { }

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
    this.item.cellTemplate = this.service.getTemplateByCode(this.item,isReset);
  }

}
